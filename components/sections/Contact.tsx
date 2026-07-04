 "use client";

import {
FaPhoneAlt,
FaWhatsapp,
FaEnvelope,
FaMapMarkerAlt,
FaFacebookF,
} from "react-icons/fa";
import {motion} from "framer-motion";
import profile from "@/data/profile";

const items=[
{icon:FaPhoneAlt,title:"الهاتف",value:profile.phone,href:`tel:${profile.phone}`,color:"text-yellow-400"},
{icon:FaWhatsapp,title:"واتساب",value:"راسلنا الآن",href:`https://wa.me/${profile.whatsapp}`,color:"text-green-500"},
{icon:FaEnvelope,title:"البريد الإلكتروني",value:profile.email,href:`mailto:${profile.email}`,color:"text-red-500"},
{icon:FaMapMarkerAlt,title:"العنوان",value:profile.address,color:"text-blue-400"},
{icon:FaFacebookF,title:"فيسبوك",value:"الصفحة الرسمية",href:profile.facebook,color:"text-blue-600"},
];

export default function Contact(){
return(
<section id="contact" className="bg-slate-900 py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-5 text-center text-5xl font-black text-yellow-400">
تواصل معنا
</motion.h2>
<p className="mb-16 text-center text-slate-400">يمكنك التواصل معنا عبر الوسائل التالية</p>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
{items.map((item,i)=>{
const Card=item.href?"a":"div";
return <Card key={i} {...(item.href?{href:item.href,target:item.href.startsWith("http")?"_blank":undefined,rel:"noopener noreferrer"}:{})}
className="rounded-3xl border border-yellow-500/20 bg-slate-950 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
<item.icon className={`mx-auto mb-5 text-4xl ${item.color}`}/>
<h3 className="mb-2 text-xl font-bold">{item.title}</h3>
<p className="break-words text-slate-300">{item.value}</p>
</Card>
})}
</div>
</div>
</section>
)}
