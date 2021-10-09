import jwt from 'jsonwebtoken';

// Was there a reason that we didnt implement the google token?


const auth = async (req, res, next) =>{

    try{
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if(token){
            decodedData = jwt.verify(token, 'test');


            req.userId = decodedData?.id;
        } else{
            console.log("something went wrong");
        }

        next();

    } catch(error){
        console.log(error);
    }


}



export default auth;