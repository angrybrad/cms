<?php
/**
 * @link http://buildwithcraft.com/
 * @copyright Copyright (c) 2013 Pixel & Tonic, Inc.
 * @license http://buildwithcraft.com/license
 */

namespace craft\app\records;

use yii\db\ActiveQueryInterface;
use craft\app\db\ActiveRecord;
use craft\app\enums\AttributeType;

/**
 * Class AssetFolder record.
 *
 * @property integer $id ID
 * @property integer $parentId Parent ID
 * @property integer $sourceId Source ID
 * @property string $name Name
 * @property string $path Path
 * @property ActiveQueryInterface $parent Parent
 * @property ActiveQueryInterface $source Source
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.0
 */
class AssetFolder extends ActiveRecord
{
	// Public Methods
	// =========================================================================

	/**
	 * @inheritdoc
	 */
	public function rules()
	{
		return [
			[['name'], 'unique', 'targetAttribute' => ['name', 'parentId', 'sourceId']],
			[['name'], 'required'],
		];
	}

	/**
	 * @inheritdoc
	 *
	 * @return string
	 */
	public static function tableName()
	{
		return '{{%assetfolders}}';
	}

	/**
	 * Returns the asset folder’s parent.
	 *
	 * @return \yii\db\ActiveQueryInterface The relational query object.
	 */
	public function getParent()
	{
		return $this->hasOne(AssetFolder::className(), ['id' => 'parentId']);
	}

	/**
	 * Returns the asset folder’s source.
	 *
	 * @return \yii\db\ActiveQueryInterface The relational query object.
	 */
	public function getSource()
	{
		return $this->hasOne(AssetSource::className(), ['id' => 'sourceId']);
	}
}
