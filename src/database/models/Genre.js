module.exports = (sequelize,dataTypes)=>{

    const alias = "Genre"
    const cols = {
        id :{
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull : false,
            autoIncrement: true
        },
        name:{
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        ranking:{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique:true
        },
        active:{
            type:dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue : 1
        }

    }

    const config ={
        tableName:"genres",// en minusculas
        timestamps:true, // si no tiene marcas de tiempo , hay que poner false
        underscored:true // si no esta con guion bajo ponemos false
    }

    const Genre = sequelize.define(alias,cols,config);



    return Genre
}