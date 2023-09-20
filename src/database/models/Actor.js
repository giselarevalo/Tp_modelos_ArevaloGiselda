module.exports = (sequelize,dataTypes)=>{

    const alias = "Actor"
    const cols = {
        id :{
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull : false,
            autoIncrement: true
        },
        first_name:{
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        last_name:{
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        rating:{
            type:dataTypes.DECIMAL(3,1),
            allowNull: true,
        },
        favorite_movie_id :{
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references : {
                model : {
                  tableName : 'movies'
                }
              }
        }

    }

    const config ={
        tableName:"actors",// en minusculas
        timestamps:true, // si no tiene marcas de tiempo , hay que poner false
        underscored:true // si no esta con guion bajo ponemos false
    }

    const Actor = sequelize.define(alias,cols,config);



    return Actor
}