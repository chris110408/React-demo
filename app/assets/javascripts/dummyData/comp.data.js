/**
 * Created by leichen on 4/11/16.
 */
import _ from 'lodash'
const data ={
    id:1001,
    name: 'comp',
    provice: '北京',
    Area:'CBD',
    StarRate:1


}

const chname = ["安邦","安福","安歌","安国","安和","安康","安澜","安民","安宁","安平","安然","安顺","安翔","安晏","安宜","安怡","安易","安志","昂然","昂雄","宾白","宾鸿","宾实","彬彬","彬炳","彬郁","斌斌","斌蔚","滨海","波光","波鸿","波峻","波涛","博瀚","博超","博达","博厚","博简","博明","博容","博赡","博涉","博实","博涛","博文","博学","博雅","博延","博艺","博易","博裕","博远","才捷","才良","才艺","才英","才哲","才俊","成和","成弘","成化","成济","成礼","成龙","成仁","成双","成天","成文","成业","成益","成荫","成周","承安","承弼","承德","承恩","承福","承基","承教","承平","承嗣","承天","承望","承宣","承颜","承业","承悦","承允","承运","承载","承泽","承志","德本","德海","德厚","德华","德辉","德惠","德容","德润","德寿","德水","德馨","德曜","德业","德义","德庸","德佑","德宇","德元","德运","德泽","德明","飞昂","飞白","飞飙","飞掣","飞尘","飞沉","飞驰","飞光","飞翰","飞航","飞翮","飞鸿","飞虎","飞捷","飞龙","飞鸾","飞鸣","飞鹏","飞扬","飞文","飞翔","飞星","飞翼","飞英","飞宇","飞羽","飞雨","飞语","飞跃","飞章","飞舟","风华","丰茂","丰羽","刚豪","刚洁","刚捷","刚毅","高昂","高岑","高畅","高超","高驰","高达","高澹","高飞","高芬","高峯","高峰","高歌","高格","高寒","高翰","高杰","高洁","高峻","高朗","高丽","高邈","高旻","高明","高爽","高兴","高轩","高雅","高扬","高阳","高义","高谊","高逸","高懿","高原","高远","高韵","高卓","光赫","光华","光辉","光济","光霁","光亮","光临","光明","光启","光熙","光耀","光誉","光远","国安","国兴","国源","冠宇","冠玉","晗昱","晗日","涵畅","涵涤","涵亮","涵忍","涵容","涵润","涵涵","涵煦","涵蓄","涵衍","涵意","涵映","涵育","翰采","翰池","翰飞","翰海","翰翮","翰林","翰墨","翰学","翰音","瀚玥","翰藻","瀚海","瀚漠","昊苍","昊昊","昊空","昊乾","昊穹","昊然","昊然","昊天","昊焱","昊英","浩波","浩博","浩初","浩大","浩宕","浩荡","浩歌","浩广","浩涆","浩瀚","浩浩","浩慨","浩旷","浩阔","浩漫","浩淼","浩渺","浩邈","浩气","浩然","浩穰","浩壤","浩思","浩言","皓轩","和蔼","和安","和璧","和昶","和畅","和风","和歌","和光","和平","和洽","和惬","和顺","和硕","和颂","和泰","和悌","和通","和同","和煦","和雅","和宜","和怡","和玉","和裕","和豫","和悦","和韵","和泽","和正","和志","鹤轩","弘博","弘大","弘方","弘光","弘和","弘厚","弘化","弘济","弘阔","弘亮","弘量","弘深","弘盛","弘图","弘伟","弘文","弘新","弘雅","弘扬","弘业","弘义","弘益","弘毅","弘懿","弘致","弘壮","宏伯","宏博","宏才","宏畅","宏达","宏大","宏放","宏富","宏峻","宏浚","宏恺","宏旷","宏阔","宏朗","宏茂","宏邈","宏儒","宏深","宏胜","宏盛","宏爽","宏硕","宏伟","宏扬","宏义","宏逸","宏毅","宏远","宏壮","鸿宝","鸿波","鸿博","鸿才","鸿彩","鸿畅","鸿畴","鸿达","鸿德","鸿飞","鸿风","鸿福","鸿光","鸿晖","鸿朗","鸿文","鸿熙","鸿羲","鸿禧","鸿信","鸿轩","鸿煊","鸿煊","鸿雪","鸿羽","鸿远","鸿云","鸿运","鸿哲","鸿祯","鸿振","鸿志","鸿卓","华奥","华采","华彩","华灿","华藏","华池","华翰","华皓","华晖","华辉","华茂","华美","华清","华荣","华容","嘉赐","嘉德","嘉福","嘉良","嘉茂","嘉木","嘉慕","嘉纳","嘉年","嘉平","嘉庆","嘉荣","嘉容","嘉瑞","嘉胜","嘉石","嘉实","嘉树","嘉澍","嘉熙","嘉禧","嘉祥","嘉歆","嘉许","嘉勋","嘉言","嘉谊","嘉懿","嘉颖","嘉佑","嘉玉","嘉誉","嘉悦","嘉运","嘉泽","嘉珍","嘉祯","嘉志","嘉致","坚白","坚壁","坚秉","坚成","坚诚","建安","建白","建柏","建本","建弼","建德","建华","建明","建茗","建木","建树","建同","建修","建业","建义","建元","建章","建中","健柏","金鑫","锦程","瑾瑜","晋鹏","经赋","经亘","经国","经略","经纶","经纬","经武","经业","经义","经艺","景澄","景福","景焕","景辉","景辉","景龙","景明","景山","景胜","景铄","景天","景同","景曜","靖琪","君昊","君浩","俊艾","俊拔","俊弼","俊才","俊材","俊驰","俊楚","俊达","俊德","俊发","俊风","俊豪","俊健","俊杰","俊捷","俊郎","俊力","俊良","俊迈","俊茂","俊美","俊民","俊名","俊明","俊楠","俊能","俊人","俊爽","俊悟","俊晤","俊侠","俊贤","俊雄","俊雅","俊彦","俊逸","俊英","俊友","俊语","俊誉","俊远","俊哲","俊喆","俊智","峻熙","季萌","季同","开畅","开诚","开宇","开济","开霁","开朗","凯安","凯唱","凯定","凯风","凯复","凯歌","凯捷","凯凯","凯康","凯乐","凯旋","凯泽","恺歌","恺乐","康安","康伯","康成","康德","康复","康健","康乐","康宁","康平","康胜","康盛","康时","康适","康顺","康泰","康裕","乐安","乐邦","乐成","乐池","乐和","乐家","乐康","乐人","乐容","乐山","乐生","乐圣","乐水","乐天","乐童","乐贤","乐心","乐欣","乐逸","乐意","乐音","乐咏","乐游","乐语","乐悦","乐湛","乐章","乐正","乐志","黎昕","黎明","力夫","力强","力勤","力行","力学","力言","立诚","立果","立人","立辉","立轩","立群","良奥","良弼","良才","良材","良策","良畴","良工","良翰","良吉","良骥","良俊","良骏","良朋","良平","良哲","理群","理全","茂才","茂材","茂德","茂典","茂实","茂学","茂勋","茂彦","敏博","敏才","敏达","敏叡","敏学","敏智","明诚","明达","明德","明辉","明杰","明俊","明朗","明亮","明旭","明煦","明轩","明远","明哲","明喆","明知","明志","明智","明珠","朋兴","朋义","彭勃","彭薄","彭湃","彭彭","彭魄","彭越","彭泽","彭祖","鹏程","鹏池","鹏飞","鹏赋","鹏海","鹏鲸","鹏举","鹏鹍","鹏鲲","鹏涛","鹏天","鹏翼","鹏云","鹏运","濮存","溥心","璞玉","璞瑜","浦和","浦泽","奇略","奇迈","奇胜","奇水","奇思","奇邃","奇伟","奇玮","奇文","奇希","奇逸","奇正","奇志","奇致","祺福","祺然","祺祥","祺瑞","琪睿","庆生","荣轩","锐达","锐锋","锐翰","锐进","锐精","锐立","锐利","锐思","锐逸","锐意","锐藻","锐泽","锐阵","锐志","锐智","睿博","睿才","睿诚","睿慈","睿聪","睿达","睿德","睿范","睿广","睿好","睿明","睿识","睿思","绍辉","绍钧","绍祺","绍元","升荣","圣杰","晟睿","思聪","思淼","思源","思远","思博","斯年","斯伯","泰初","泰和","泰河","泰鸿","泰华","泰宁","泰平","泰清","泰然","天材","天成","天赋","天干","天罡","天工","天翰","天和","天华","天骄","天空","天禄","天路","天瑞","天睿","天逸","天佑","天宇","天元","天韵","天泽","天纵","同方","同甫","同光","同和","同化","同济","巍昂","巍然","巍奕","伟博","伟毅","伟才","伟诚","伟茂","伟懋","伟祺","伟彦","伟晔","伟泽","伟兆","伟志","温纶","温茂","温书","温韦","温文","温瑜","文柏","文昌","文成","文德","文栋","文赋","文光","文翰","文虹","文华","文康","文乐","文林","文敏","文瑞","文山","文石","文星","文轩","文宣","文彦","文曜","文耀","文斌","文彬","文滨","向晨","向笛","向文","向明","向荣","向阳","翔宇","翔飞","项禹","项明","晓博","心水","心思","心远","欣德","欣嘉","欣可","欣然","欣荣","欣怡","欣怿","欣悦","新翰","新霁","新觉","新立","新荣","新知","信鸿","信厚","信鸥","信然","信瑞","兴安","兴邦","兴昌","兴朝","兴德","兴发","兴国","兴怀","兴平","兴庆","兴生","兴思","兴腾","兴旺","兴为","兴文","兴贤","兴修","兴学","兴言","兴业","兴运","星波","星辰","星驰","星光","星海","星汉","星河","星华","星晖","星火","星剑","星津","星阑","星纬","星文","星宇","星雨","星渊","星洲","修诚","修德","修杰","修洁","修谨","修筠","修明","修能","修平","修齐","修然","修为","修伟","修文","修雅","修永","修远","修真","修竹","修贤","旭尧","炫明","学博","学海","学林","学民","学名","学文","学义","学真","雪松","雪峰","雪风","雅昶","雅畅","雅达","雅惠","雅健","雅珺","雅逸","雅懿","雅志","炎彬","阳飙","阳飇","阳冰","阳波","阳伯","阳成","阳德","阳华","阳晖","阳辉","阳嘉","阳平","阳秋","阳荣","阳舒","阳朔","阳文","阳曦","阳夏","阳旭","阳煦","阳炎","阳焱","阳曜","阳羽","阳云","阳泽","阳州","烨赫","烨华","烨磊","烨霖","烨然","烨烁","烨伟","烨烨","烨熠","烨煜","毅然","逸仙","逸明","逸春","宜春","宜民","宜年","宜然","宜人","宜修","意远","意蕴","意致","意智","熠彤","懿轩","英飙","英博","英才","英达","英发","英范","英光","英豪","英华","英杰","英朗","英锐","英睿","英叡","英韶","英卫","英武","英悟","英勋","英彦","英耀","英奕","英逸","英毅","英哲","英喆","英卓","英资","英纵","永怡","永春","永安","永昌","永长","永丰","永福","永嘉","永康","永年","永宁","永寿","永思","永望","永新","永言","永逸","永元","永贞","咏德","咏歌","咏思","咏志","勇男","勇军","勇捷","勇锐","勇毅","宇达","宇航","宇寰","宇文","宇荫","雨伯","雨华","雨石","雨信","雨星","雨泽","玉宸","玉成","玉龙","玉泉","玉山","玉石","玉书","玉树","玉堂","玉轩","玉宇","玉韵","玉泽","煜祺","元白","元德","元化","元基","元嘉","元甲","元驹","元凯","元恺","元魁","元良","元亮","元龙","元明","元青","元思","元纬","元武","元勋","元正","元忠","元洲","远航","苑博","苑杰","越彬","蕴涵","蕴和","蕴藉","展鹏","哲瀚","哲茂","哲圣","哲彦","振海","振国","正诚","正初","正德","正浩","正豪","正平","正奇","正青","正卿","正文","正祥","正信","正雅","正阳","正业","正谊","正真","正志","志诚","志新","志勇","志明","志国","志强","志尚","志专","志文","志行","志学","志业","志义","志用","志泽","致远","智明","智鑫","智勇","智敏","智志","智渊","子安","子晋","子民","子明","子默","子墨","子平","子琪","子石","子实","子真","子濯","子昂","子轩","子瑜","自明","自强","作人","自怡","自珍","曾琪","泽宇","泽语","碧灵","诗柳","夏柳","采白","慕梅","乐安","冬菱","紫安","宛凝","雨雪","易真","安荷","静竹","代柔","丹秋","绮梅","依白","凝荷","幼珊","忆彤","凌青","之桃","芷荷","听荷","代玉","念珍","梦菲","夜春","千秋","白秋","谷菱","飞松","初瑶","惜灵","恨瑶","梦易","新瑶","曼梅","碧曼","友瑶","雨兰","夜柳","香蝶","盼巧","芷珍","香卉","含芙","夜云","凝雁","以莲","易容","元柳","安南","幼晴","尔琴","飞阳","白凡","沛萍","雪瑶","向卉","采文","乐珍","寒荷","觅双","白桃","安卉","迎曼","盼雁","乐松","涵山","恨寒","问枫","以柳","含海","秋春","翠曼","忆梅","涵柳","梦香","海蓝","晓曼","代珊","春冬","恨荷","忆丹","静芙","绮兰","梦安","紫丝","千雁","凝珍","香萱","梦容","飞柏","天真","翠琴","寄真","秋荷","代珊","初雪","雅柏","怜容","如风","南露","紫易","冰凡","海雪","语蓉","碧玉","翠岚","语风","盼丹","痴旋","凝梦","从雪","白枫","傲云","白梅","念露","慕凝","雅柔","盼柳","半青","从霜","怀柔","怜晴","夜蓉","代双","以南","若菱","芷文","寄春","南晴","恨之","梦寒","初翠","灵波","巧春","问夏","凌春","惜海","亦旋","沛芹","幼萱","白凝","初露","迎海","绮玉","凌香","寻芹","秋柳","尔白","映真","含雁","寒松","友珊","寻雪","忆柏","秋柏","巧风","恨蝶","青烟","问蕊","灵阳","春枫","又儿","雪巧","丹萱","凡双","孤萍","紫菱","寻凝","傲柏","傲儿","灵枫","尔丝","曼凝","若蕊","问丝","思枫","水卉","问梅","念寒","诗双","翠霜","夜香","寒蕾","凡阳","冷玉","平彤","语薇","幻珊","紫夏","凌波","芷蝶","丹南","之双","凡波","思雁","白莲","从菡","如容","采柳","沛岚","惜儿","夜玉","水儿","半凡","语海","听莲","幻枫","念柏","冰珍","思山","凝蕊","天玉","问香","思萱","向梦","夏旋","之槐","元灵","以彤","采萱","巧曼","绿兰","平蓝","问萍","绿蓉","碧曼","思卉","白柏","妙菡","怜阳","雨柏","雁菡","梦之","又莲","乐荷","寒天","凝琴","书南","映天","白梦","初瑶","恨竹","平露","含巧","慕蕊","半莲","醉卉","天菱","青雪","雅旋","巧荷","飞丹","恨云","若灵","尔云","幻天","诗兰","青梦","灵槐","忆秋","寒凝","凝芙","绮山","静白","尔蓉","尔冬","映萱","白筠","冰双","访彤","绿柏","夏云","笑翠","晓灵","含双","盼波","以云","怜翠","雁风","之卉","平松","问儿","绿柳","如蓉","曼容","天晴","丹琴","惜天","寻琴","痴春","依瑶","涵易","忆灵","从波","依柔","问兰","山晴","怜珊","之云","飞双","傲白","沛春","雨南","梦之","笑阳","代容","友琴","雁梅","友桃","从露","语柔","傲玉","觅夏","晓蓝","新晴","雨莲","凝旋","绿旋","幻香","觅双","冷亦","忆雪","友卉","幻翠","靖柔","寻菱","丹翠","安阳","雅寒","惜筠","尔安","雁易","飞瑶","夏兰","沛蓝","静丹","山芙","笑晴","新烟","笑旋","雁兰","凌翠","秋莲","书桃","傲松","语儿","映菡","初曼","听云","孤松","初夏","雅香","语雪","初珍","白安","冰薇","诗槐","冷玉","冰巧","之槐","香柳","问春","夏寒","半香","诗筠","新梅","白曼","安波","从阳","含桃","曼卉","笑萍","晓露","寻菡","沛白","平灵","水彤","安彤","涵易","乐巧","依风","紫南","亦丝","易蓉","紫萍","惜萱","诗蕾","寻绿","诗双","寻云","孤丹","谷蓝","惜香","谷枫","山灵","幻丝","友梅","从云","雁丝","盼旋","幼旋","尔蓝","沛山","代丝","痴梅","觅松","冰香","依玉","冰之","妙梦","以冬","碧春","曼青","冷菱","雪曼","安白","香桃","安春","千亦","凌蝶","又夏","沛凝","翠梅","书文","雪卉","乐儿","傲丝","安青","初蝶","寄灵","惜寒","雨竹","冬莲","绮南","翠柏","平凡","亦玉","孤兰","秋珊","新筠","半芹","夏瑶","念文","晓丝","涵蕾","雁凡","谷兰","灵凡","凝云","曼云","丹彤","夜梦","从筠","雁芙","语蝶","依波","晓旋","念之","盼芙","曼安","采珊","盼夏","初柳","迎天","曼安","南珍","妙芙","语柳","含莲","晓筠","夏山","尔容","采春","念梦","傲南","问薇","雨灵","凝安","冰海","初珍","宛菡","冬卉","盼晴","冷荷","寄翠","幻梅","如凡","语梦","易梦","千柔","向露","梦玉","傲霜","依霜","灵松","诗桃","书蝶","恨真","冰蝶","山槐","以晴","友易","梦桃","香菱","孤云","水蓉","雅容","飞烟","雁荷","代芙","醉易","夏烟","山梅","若南","恨桃","依秋","依波","香巧","紫萱","涵易","忆之","幻巧","水风","安寒","白亦","惜玉","碧春","怜雪","听南","念蕾","梦竹","千凡","寄琴","采波","元冬","思菱","平卉","笑柳","雪卉","南蓉","谷梦","巧兰","绿蝶","飞荷","平安","孤晴","芷荷","曼冬","寻巧","尔槐","以旋","绿蕊","初夏","依丝","怜南","千山","雨安","水风","寄柔","念巧","幼枫","凡桃","新儿","春翠","夏波","雨琴","静槐","元槐","映阳","飞薇","小凝","映寒","傲菡","谷蕊","笑槐","飞兰","笑卉","迎荷","元冬","书竹","半烟","绮波","小之","觅露","夜雪","春柔","寒梦","尔风","白梅","雨旋","芷珊","山彤","尔柳","沛柔","灵萱","沛凝","白容","乐蓉","映安","依云","映冬","凡雁","梦秋","醉柳","梦凡","秋巧","若云","元容","怀蕾","灵寒","天薇","白风","访波","亦凝","易绿","夜南","曼凡","亦巧","白萱","友安","诗翠","雪珍","海之","小蕊"];

const randomRole = (i)=>{
     let ret = i*23
    return ret<1800?ret:(ret/1800)+i>>0
}


let comData = (Array(15).fill(1)).map((c,i)=>{
    return {
        id: 1000+i+1,
        name: `${chname[randomRole(i)]}酒店`,
        provice: '北京',
        Area:'CBD',
        StarRate:`${5-((i/5)>>0)}`

    }
})

 comData = _.keyBy(comData,'id')

export default comData