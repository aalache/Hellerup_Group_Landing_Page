import logo from '../assets/logo_Hell2.png'
import companyGroup  from '../assets/company-group.jpg'
import analysis from '../assets/analysis.jpg'


// brands 
    // ---- Costmetics
import belorDesign  from '../assets/brands/costmetics/belor_design.png'
import botelab  from '../assets/brands/costmetics/botelab.png'
import amule  from '../assets/brands/costmetics/amule.png'
import desio  from '../assets/brands/costmetics/desio.png'
import icona  from '../assets/brands/costmetics/Icona.png'
import iren  from '../assets/brands/costmetics/iren.webp'
import ium  from '../assets/brands/costmetics/ium.png'
import purodore  from '../assets/brands/costmetics/purodore.png'
import sabrinaMilano  from '../assets/brands/costmetics/sabrina_milano.png'

    // ---- Fashion
import forStrong  from '../assets/brands/fashion/for_strong.png'
import letItBe  from '../assets/brands/fashion/let_it_be.png'
import lybethras  from '../assets/brands/fashion/lybethras.png'
import oneOne  from '../assets/brands/fashion/one_one.png'
import squatWolf  from '../assets/brands/fashion/squat_wolf.png'

    // ---- food & baverages
import blueWater  from '../assets/brands/food_&_baverages/blue_water.png'
import noble  from '../assets/brands/food_&_baverages/noble.png'

    // ---- Perfume
import laurenDickinson  from '../assets/brands/perfume/lauren_dickinson.png'
import orientica  from '../assets/brands/perfume/orientica.png'

const brands = {
    cosmetics : [
        belorDesign,
        botelab,
        amule,
        desio,
        icona,
        iren,
        ium,
        purodore,
        sabrinaMilano,

    ],
    fashion : [
        forStrong,
        letItBe,
        lybethras,
        oneOne,
        squatWolf,
    ],
    food_baverage: [
        blueWater,
        noble,
    ],
    perfume : [
        laurenDickinson,
        orientica,
    ]
}

export default {
    logo,
    companyGroup,
    analysis,
    brands,
}