import logo from '../assets/logo_Hell2.webp'
import companyGroup  from '../assets/company-group.webp'
import analysis from '../assets/analysis.webp'


// brands 
    // ---- Costmetics
import belorDesign  from '../assets/brands/costmetics/belor_design.webp'
import botelab  from '../assets/brands/costmetics/botelab.webp'
import cmiile  from '../assets/brands/costmetics/cmiile.webp'
import desio  from '../assets/brands/costmetics/desio.webp'
import icona  from '../assets/brands/costmetics/Icona.webp'
import iren  from '../assets/brands/costmetics/iren.webp'
import ium  from '../assets/brands/costmetics/ium.webp'
import purodore  from '../assets/brands/costmetics/purodore.webp'
import sabrinaMilano  from '../assets/brands/costmetics/sabrina_milano.webp'

    // ---- Fashion
import forStrong  from '../assets/brands/fashion/for_strong.webp'
import letItBe  from '../assets/brands/fashion/let_it_be.webp'
import lybethras  from '../assets/brands/fashion/lybethras.webp'
import oneOne  from '../assets/brands/fashion/one_one.webp'
import squatWolf  from '../assets/brands/fashion/squat_wolf.webp'

    // ---- food & baverages
import blueWater  from '../assets/brands/food_&_baverages/blue_water.webp'
import noble  from '../assets/brands/food_&_baverages/noble.webp'

    // ---- Perfume
import laurenDickinson  from '../assets/brands/perfume/lauren_dickinson.webp'
import orientica  from '../assets/brands/perfume/orientica.webp'


// brands backgrounds
import belorDesignBg  from '../assets/brands/brand_bgs/belor_design_bg.webp'
import blueWaterBg  from '../assets/brands/brand_bgs/blue_water_bg.webp'
import botelabBg  from '../assets/brands/brand_bgs/botelab_bg.webp'
import cmiileBg  from '../assets/brands/brand_bgs/cmiile_bg.webp'
import desioBg  from '../assets/brands/brand_bgs/desio_bg.webp'
import forStrongBg  from '../assets/brands/brand_bgs/for_strong_bg.webp'
import iconaBg  from '../assets/brands/brand_bgs/icona_bg.webp'
import irenBg  from '../assets/brands/brand_bgs/iren_bg.webp'
import iumBg  from '../assets/brands/brand_bgs/ium_bg.webp'
import laurenDickinsonBg  from '../assets/brands/brand_bgs/lauren_dickinson_bg.webp'
import letItBeBg  from '../assets/brands/brand_bgs/let_it_be_bg.webp'
import lybethrasBg  from '../assets/brands/brand_bgs/lybethras_bg.webp'
import nobleBg  from '../assets/brands/brand_bgs/noble_bg.webp'
import oneOneBg  from '../assets/brands/brand_bgs/one_one_bg.webp'
import orienticaBg  from '../assets/brands/brand_bgs/orientica_bg.webp'
import purodoreBg  from '../assets/brands/brand_bgs/purodore_bg.webp'
import sabrinaMilanoBg  from '../assets/brands/brand_bgs/sabrina_milano_bg.webp'
import squatWolfBg  from '../assets/brands/brand_bgs/squat_wolf_bg.webp'

// importing hug management section images
import pic1 from '../assets/hug_management/sports/pic1.webp'
import pic2 from '../assets/hug_management/sports/pic2.webp'
import pic3 from '../assets/hug_management/sports/pic3.webp'
import pic4 from '../assets/hug_management/sports/pic4.webp'

// importing subsidiaries images
import donaHills from '../assets/subsidiaries/dona_hills.webp'

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

const subsidiaries = [
    {image: donaHills}
]

const hug_images = {
    sports: [
        {id:1,image: pic1},
        {id:2,image: pic2},
        {id:4,image: pic4},
        {id:3,image: pic3},
    ]
}



export default {
    logo,
    companyGroup,
    analysis,
    brands,
    hug_images,
    subsidiaries,
}