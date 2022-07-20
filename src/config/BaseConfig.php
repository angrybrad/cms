<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\config;

use craft\base\FluentModelTrait;
use craft\base\Model;
use craft\services\Config;
use yii\base\BaseObject;
use yii\base\UnknownPropertyException;

/**
 * Base config class
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 4.2.0
 */
class BaseConfig extends Model
{
    use FluentModelTrait;

    /**
     * @var string The category for this config
     */
    public static $configCategory = '';

    /**
     * @var array Settings that have been renamed
     */
    protected static array $renamedSettings = [
    ];

    /**
     * Factory method for creating new config objects
     *
     * @param array $config
     * @return static
     */
    public static function create(array $config = []): static
    {
        return new static($config);
    }

    /**
     * @inerhitdoc
     */
    final public function __construct($config = [])
    {
        parent::__construct($config);
    }
    
    /**
     * @inheritdoc
     */
    public function __get($name)
    {
        if (isset(static::$renamedSettings[$name])) {
            return $this->{static::$renamedSettings[$name]};
        }

        return parent::__get($name);
    }

    /**
     * @inheritdoc
     */
    public function __set($name, $value)
    {
        if (isset(static::$renamedSettings[$name])) {
            $newName = static::$renamedSettings[$name];
            $configFilePath = Craft::$app->getConfig()->getConfigFilePath(static::$configCategory);
            Craft::$app->getDeprecator()->log($name, "The `$name` config setting has been renamed to `$newName`.", $configFilePath);
            $this->$newName = $value;
            return;
        }

        try {
            parent::__set($name, $value);
        } catch (UnknownPropertyException) {
            $category = static::$configCategory;
            throw new UnknownPropertyException("Invalid $category config setting: $name. You can set custom config settings from config/custom.php.");
        }
    }

    /**
     * @inheritdoc
     */
    public function __isset($name)
    {
        if (isset(static::$renamedSettings[$name])) {
            return isset($this->{static::$renamedSettings[$name]});
        }

        return parent::__isset($name);
    }
}
