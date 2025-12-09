import logo from '../assets/logo_Hell2.png'
import companyGroup  from '../assets/company-group.jpg'
import analysis from '../assets/analysis.jpg'


// brands 
    // ---- Costmetics
import belorDesign  from '../assets/brands/costmetics/belor_design.png'
import botelab  from '../assets/brands/costmetics/botelab.png'
import cmiile  from '../assets/brands/costmetics/cmiile.png'
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


// brands backgrounds
import belorDesignBg  from '../assets/brands/brand_bgs/belor_design_bg.jpeg'
import blueWaterBg  from '../assets/brands/brand_bgs/blue_water_bg.jpeg'
import botelabBg  from '../assets/brands/brand_bgs/botelab_bg.jpeg'
import cmiileBg  from '../assets/brands/brand_bgs/cmiile_bg.jpeg'
import desioBg  from '../assets/brands/brand_bgs/desio_bg.jpeg'
import forStrongBg  from '../assets/brands/brand_bgs/for_strong_bg.webp'
import iconaBg  from '../assets/brands/brand_bgs/icona_bg.jpeg'
import irenBg  from '../assets/brands/brand_bgs/iren_bg.webp'
import iumBg  from '../assets/brands/brand_bgs/ium_bg.jpeg'
import laurenDickinsonBg  from '../assets/brands/brand_bgs/lauren_dickinson_bg.jpeg'
import letItBeBg  from '../assets/brands/brand_bgs/let_it_be_bg.webp'
import lybethrasBg  from '../assets/brands/brand_bgs/lybethras_bg.jpeg'
import nobleBg  from '../assets/brands/brand_bgs/noble_bg.jpeg'
import oneOneBg  from '../assets/brands/brand_bgs/one_one_bg.jpeg'
import orienticaBg  from '../assets/brands/brand_bgs/orientica_bg.webp'
import purodoreBg  from '../assets/brands/brand_bgs/purodore_bg.jpeg'
import sabrinaMilanoBg  from '../assets/brands/brand_bgs/sabrina_milano_bg.jpeg'
import squatWolfBg  from '../assets/brands/brand_bgs/squat_wolf_bg.jpeg'

// importing hug management section images
import pic1 from '../assets/hug_management/sports/pic1.png'
import pic2 from '../assets/hug_management/sports/pic2.png'
import pic3 from '../assets/hug_management/sports/pic3.png'
import pic4 from '../assets/hug_management/sports/pic4.png'

// flags images
import franceFlag from '../assets/flag-france.jpg'
import UkFlag from '../assets/uk-flag.jpg'

const brands = {
    cosmetics : [
        {logo: belorDesign, bg: belorDesignBg},
        {logo: botelab, bg: botelabBg},
        {logo: cmiile, bg: cmiileBg},
        {logo: desio, bg: desioBg},
        {logo: icona, bg: iconaBg},
        {logo: iren, bg: irenBg},
        {logo: ium, bg: iumBg},
        {logo: purodore, bg: purodoreBg},
        {logo: sabrinaMilano, bg: sabrinaMilanoBg},
    ],
    fashion : [
        {logo: forStrong, bg: forStrongBg},
        {logo: letItBe, bg: letItBeBg},
        {logo: lybethras, bg: lybethrasBg},
        {logo: oneOne, bg: oneOneBg},
        {logo: squatWolf, bg: squatWolfBg},
    ],
    food__baverage: [
        {logo: blueWater, bg: blueWaterBg},
        {logo: noble, bg: nobleBg},
    ],
    perfume : [
        {logo: laurenDickinson, bg: laurenDickinsonBg},
        {logo: orientica, bg: orienticaBg},
    ]
}

const hug_images = {
    sports: [
        {id:1,image: pic1},
        {id:2,image: pic2},
        {id:4,image: pic4},
        {id:3,image: pic3},
    ]
}

const flags = {
    france: {flag: franceFlag},
    uk: {flag: UkFlag}
}

export default {
    logo,
    companyGroup,
    analysis,
    brands,
    hug_images,
    flags,
}