 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profile from "@/data/profile";

export default function Companies(){
return(
<section id="companies" className="bg-slate-950 py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16 text-center text-5xl font-black text-yellow-400">
مجموعة شركات الأمريكية
</motion.h2>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{profile.companies.map((company,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:index*.08}}
className="rounded-3xl border border-yellow-500/20 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-yellow-400">
<div className="mb-6 flex justify-center">
<Image src={company.logo} alt={company.name} width={90} height={90}/>
</div>

<h3 className="mb-4 text-center text-2xl font-bold">{company.name}</h3>

<p className="text-center leading-8 text-slate-400">
{company.description}
</p>
</motion.div>
))}
</div>
</div>
</section>
)}
