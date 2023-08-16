const product1 = require("../models/product")

const getAllProducts = async (req,res)=>{
    
    const {company,name} = req.query;
    const queryObj = {}

    if(company){
        queryObj.company = company
    }
    if(name){
        queryObj.name = {$regex : name, $options: "i"}; //i is caseinstensive
    }


    let apidata = product1.find(queryObj)
    if(sort){
        let sortfix = sort.split(",").join("");
        apidata = apidata.sort(sortfix);
    }

    if(select){
        //let selectfix = select.replace(",","");
        let selectfix = select.split(",").join(""); //caanseach multiple using coma

        apidata = apidata.select(selectfix);
    }

    const mydata = await product1.find(queryObj);
    res.status(200).json({mydata})
    // res.send("getall")


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    // user = page=2
    //limit default= 3
    //skip = 1 * 3 (showing 3 data in one page!) 
    apidata = apidata.skip(skip).limit(limit);

}
const getAllProductsTesting = async (req,res)=>{
    const mydata = await product1.find(req.query);
    res.status(200).json({mydata, bHits:mydata.length})
}

module.exports = {getAllProducts,getAllProductsTesting};