import "./Product.css";
import React, { useEffect, useState } from "react";
const GridDefault = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                setData(resp)
            })
        })
    }, [])
    return ( <
        div className = "grid-default-div" >
        <
        img className = "rectangle-icon"
        alt = ""
        src = "../rectangle-115.svg" / >
        <
        div className = "group-div" >
        <
        div className = "div" > . < /div> <
        div className = "div1" > . < /div> <
        div className = "home-div" > { `Home ` } < /div> <
        div className = "pages-div" > Pages < /div> <
        div className = "shop-grid-default" > Shop Grid Default < /div> <
        div className = "shop-grid-default1" > Shop Grid Default < /div> <
        /div> <
        div className = "page-sort-by" >
        <
        div className = "ecommerce-acceories-fashion" > { `Ecommerce Acceories & Fashion item ` } < /div> <
        div className = "about-9620-results-062-seco" >
        About 9, 620 results(0.62 seconds) <
        /div> <
        div className = "per-page-div" > Per Page: < /div> <
        div className = "sort-by-div" > Sort By: < /div> <
        div className = "view-div" > View: < /div> <
        div className = "group-div1" >
        <
        div className = "rectangle-div" / >
        <
        /div> <
        img className = "claritygrid-view-solid-icon"
        alt = ""
        src = "../claritygridviewsolid.svg" /
        >
        <
        img className = "fa-solidlist-icon"
        alt = ""
        src = "../fasolidlist.svg" / >
        <
        div className = "group-div2" >
        <
        div className = "rectangle-div" / >
        <
        /div> <
        div className = "group-div3" >
        <
        div className = "group-div4" >
        <
        img className = "akar-iconschevron-down"
        alt = ""
        src = "../akariconschevrondown.svg" /
        >
        <
        div className = "best-match-div" > Best Match < /div> <
        /div> <
        /div> <
        div className = "group-div5" >
        <
        div className = "rectangle-div" / >
        <
        /div> <
        /div>


        <
        div className = "ecommerce-accesories-div" > {
            data.map((item, index) =>
                <
                div className = "group-div4" >
                <
                div className = "group-div4"
                key = { index } >
                <
                div className = "rectangle-div3" / >
                <
                b className = "jonathan-adler-chair" > { item.title } < /b> <
                img className = "group-icon"
                alt = ""
                src = "{item.image}" / >
                <
                div className = "group-div8" >
                <
                div className = "div2" > $ { item.price } < /div> <
                div className = "div3" > { `$26.00 ` } < /div> <
                /div> <
                /div>

                <
                img className = "group-icon1"
                alt = ""
                src = "../group-49.svg" / >

                <
                /div>
            )
        }

        <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div>

        <
        div className = "ecommerce-accesories-div1" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair1" > Vitae suspendisse sed < /b> <
        img className = "group-icon"
        alt = ""
        src = "{item.image}" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-491.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon1"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div2" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair2" > Sed at fermentum < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-492.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon2"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div3" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair3" > Ultrices mauris sit < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-493.svg" / >
        <
        /div> <
        img className = "image-1164-icon3"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div4" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair4" > Purus risus, ut < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-494.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon2"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div5" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair5" > Lectus vulputate faucibus < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-495.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon5"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div6" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair6" > Cras scelerisque velit < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-496.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon6"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div7" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair7" > Pellentesque condimentum ac < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-497.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon7"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div8" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair8" > Sollicitudin amet orci < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-498.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon8"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div9" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair9" > Vestibulum magna laoreet < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-499.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon9"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div10" >
        <
        div className = "group-div4" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div3" / >
        <
        b className = "jonathan-adler-chair10" > Fusce pellentesque at < /b> <
        img className = "group-icon"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div8" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon1"
        alt = ""
        src = "../group-4910.svg" / >
        <
        /div> <
        img className = "image-1164-icon"
        alt = ""
        src = "../image-1164@2x.png" / >
        <
        img className = "image-1172-icon"
        alt = ""
        src = "../image-1172@2x.png" / >
        <
        img className = "image-9-icon1"
        alt = ""
        src = "../image-9@2x.png" / >
        <
        img className = "purepng-1-icon"
        alt = ""
        src = "../purepng-1@2x.png" / >
        <
        img className = "cznmcy1wcml2yxrll3jhd3bpegvsx2-icon"
        alt = ""
        src = "../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png" /
        >
        <
        img className = "image-1173-icon"
        alt = ""
        src = "../image-1173@2x.png" / >
        <
        img className = "icon"
        alt = ""
        src = "../10011-1@2x.png" / >
        <
        img className = "drone-2-icon"
        alt = ""
        src = "../drone-2@2x.png" / >
        <
        img className = "unnamed-1-icon10"
        alt = ""
        src = "../unnamed-1@2x.png" / >
        <
        img className = "cam-2-icon"
        alt = ""
        src = "../cam-2@2x.png" / >
        <
        img className = "movado-connect-1562173094-2-icon"
        alt = ""
        src = "../1562173100movadoconnect1562173094-2@2x.png" /
        >
        <
        img className = "res-7e24bf6d78bbb2518489d0af84-icon"
        alt = ""
        src = "../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png" /
        >
        <
        /div> <
        div className = "ecommerce-accesories-div11" >
        <
        div className = "group-div39" >
        <
        div className = "group-div4" >
        <
        div className = "rectangle-div14" / >
        <
        b className = "jonathan-adler-chair11" >
        Ultricies condimentum imperdiet <
        /b> <
        img className = "group-icon22"
        alt = ""
        src = "../group-44.svg" / >
        <
        div className = "group-div41" >
        <
        div className = "div2" > $42 .00 < /div> <
        div className = "div3" > { `$26.00 ` } < /div> <
        /div> <
        /div> <
        img className = "group-icon23"
        alt = ""
        src = "../group-4911.svg" / >
        <
        /div> <
        img className = "image-1165-icon"
        alt = ""
        src = "../image-1165@2x.png" / >
        <
        /div>

        <
        img className = "image-1174-icon"
        alt = ""
        src = "../image-1174@2x.png" / >
        <
        /div>
    );
};
export default GridDefault;