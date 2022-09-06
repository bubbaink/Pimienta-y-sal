const express = require("express");
const menus = require("./data/menu.json")

module.exports = {
    detail: (req, res)=>{
        /* let {name, description,price,img} = menus.find() */
        return res.render("detalleMenu", {menus})
        /* return res.send(food) */
    },
    detalle : (req, res)=>{
        let {idMenu} = req.params
        let food = menus.find(menu=> menu.id == +idMenu)
        return res.render("plato",{food})
        /* return res.send(food) */
        
    }

}
