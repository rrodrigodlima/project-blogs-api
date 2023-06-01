module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date().toISOString(),
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date().toISOString(),
    },
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  },
);
BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User,{
    foreignKey: 'userId',
    as: 'user' },
  );
};
  return BlogPost;
};