const express = require("express");
const menus = require("./data/menu.json")

module.exports = {
    index: (req, res)=>{
        return res.render("index",{menus})
    }
}