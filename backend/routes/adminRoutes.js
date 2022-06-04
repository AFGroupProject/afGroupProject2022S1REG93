const express = require('express');
const Create = require('../models/createModel');

const router = express.Router();

//save marking schems
router.post('/createMarking',(req,res)=>{

    let newCreate = new Create(req.body);

    newCreate.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Marking scheme saved succesfuuly"
        });
    });
});

//get post

router.get('/posts',(req,res)=>{
    Create.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post
router.get('/post/:id',(req,res)=>{
    let postId = req.params.id;
    Create.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});



//update
router.put('/update/:id',(req,res)=>{
    Create.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err});
            }

            return res.status(200).json({
                success:"Updates Succesfully"
            });
        }
    );
});

//Delete method
router.delete('/delete/:id',(req,res)=>{
    Create.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
                message:"Delete Unsuccessfully",err
            });

            return res.json({
                message:"Deleted Succesfully", deletedPost
            });
    });
});


module.exports = router;