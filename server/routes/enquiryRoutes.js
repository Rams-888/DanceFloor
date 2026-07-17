const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

// Add Enquiry
router.post("/", async (req, res) => {

    try {

        const enquiry = new Enquiry(req.body);

        await enquiry.save();

        res.status(201).json({

            success:true,
            message:"Enquiry Submitted Successfully"

        });

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:"Server Error"

        });

    }

});

// Get All Enquiries
router.get("/", async (req,res)=>{

    try{

        const enquiries=await Enquiry.find().sort({createdAt:-1});

        res.json(enquiries);

    }

    catch(error){

        res.status(500).json({

            message:"Server Error"

        });

    }

});

// Delete Enquiry
router.delete("/:id",async(req,res)=>{

    try{

        await Enquiry.findByIdAndDelete(req.params.id);

        res.json({

            message:"Enquiry Deleted Successfully"

        });

    }

    catch(error){

        res.status(500).json({

            message:"Server Error"

        });

    }

});

module.exports=router;