 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

const honors=[
{image:"/images/honors/kuwait.jpg",title:"استقبال رئيس وزراء الكويت"},
{image:"/images/honors/arab-league.jpg",title:"مشاركة بالجامعة العربية"},
{image:"/images/honors/monshawy.jpg",title:"تكريم بمدينة بدر"},
{image:"/images/honors/mohsen.jpg",title:"تكريم معالي الوزير محسن النعماني"},
{image:"/images/honors/aboulgheit.jpg",title:"لقاء مع أمين الجامعة العربية"},
{image:"/images/honors/essam-sharaf.jpg",title:"استقبال الدكتور عصام شرف"},
{image:"/images/honors/fathy-sorour.jpg",title:"لقاء مع الدكتور فتحي سرور"},
{image:"/images/honors/ahmed-altayeb.jpg",title:"لقاء مع فضيلة الإمام الأكبر الدكتور أحمد الطيب"},
{image:"/images/honors/qadry.jpg",title:"تكريم معالي الوزير قدري أبو حسين"},
];

export default function Honors(){
return(
<section className="bg-slate-950 py-24">
<div className="max-w-7xl mx-auto px-6">
<motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16 text-center text-5xl font-black text-yellow-400">التكريمات واللقاءات الرسمية</motion.h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{honors.map((item,i)=>(
<motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-slate-900 hover:border-yellow-400 transition">
<div className="relative h-80">
<Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 hover:scale-105"/>
</div>
<div className="p-5 text-center text-lg font-bold text-white">{item.title}</div>
</motion.div>
))}
</div>
</div>
</section>
)}