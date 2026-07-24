"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "@/data/profile";
import Counter from "@/components/Counter";
import {
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaAward,
  FaGraduationCap,
  FaHeart,
  FaTrophy,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaMosque,
  FaHospital,
  FaChild,
  FaHome,
} from "react-icons/fa";

// حساب العمر تلقائياً
const birthYear = 1953;
const currentAge = new Date().getFullYear() - birthYear;

// الميزات الأساسية
const features = [
  {
    icon: FaBuilding,
    title: "ريادة الأعمال",
    desc: "أسس وقاد مجموعة شركات ناجحة في مصر ودولة الكويت في مجالات متعددة.",
  },
  {
    icon: FaUsers,
    title: "العمل المجتمعي",
    desc: "كرّس جزءًا كبيرًا من مسيرته لخدمة المجتمع ودعم المبادرات الخيرية والتنموية.",
  },
  {
    icon: FaHandshake,
    title: "القيادة",
    desc: "شغل العديد من المناصب القيادية داخل مؤسسات اقتصادية واجتماعية على مدار عقود.",
  },
  {
    icon: FaAward,
    title: "الخبرة",
    desc: "خبرة عملية وإدارية تمتد لأكثر من خمسة عقود داخل مصر ودولة الكويت.",
  },
];

// ميزات إضافية
const extraFeatures = [
  {
    icon: FaGraduationCap,
    title: "البرامج التدريبية",
    desc: "شارك في العديد من البرامج المتخصصة مثل برنامج المدير الدولي، برنامج استشراق المستقبل، مهارات الاتصال والتعامل البشري، والإداري المحترف من معهد كريستكوم الأمريكي.",
  },
  {
    icon: FaHeart,
    title: "العمل الخيري",
    desc: "مؤسس ورئيس جمعية مصر الكويت الخيرية، ومؤسس ورئيس جمعية أهل سوهاج للخدمات الثقافية، ومؤسس مجمع المعاهد الأزهرية بقرية كوم اشكيلو.",
  },
  {
    icon: FaTrophy,
    title: "المناصب القيادية",
    desc: "نائب رئيس الجالية المصرية بالكويت سابقاً، رئيس اتحاد الروابط المصرية بالكويت، رئيس رابطة أبناء سوهاج بالكويت، ومرشح سابق لمجلس الشورى المصري.",
  },
];

// الجدول الزمني (Timeline)
const timeline = [
  {
    year: "1953",
    title: "الميلاد والنشأة",
    desc: "ولد في قرية كوم اشكيلو - جرجا - محافظة سوهاج، ونشأ في أسرة مصرية أصيلة.",
  },
  {
    year: "1973",
    title: "حرب أكتوبر المجيدة",
    desc: "شارك في حرب أكتوبر المجيدة، عبر القناة مع أبناء مصر الأبطال ورابط على أرض سيناء.",
  },
  {
    year: "1975",
    title: "السفر إلى الكويت",
    desc: "انتقل إلى دولة الكويت لبدء رحلة مهنية استمرت لعقود.",
  },
  {
    year: "1975 - 1994",
    title: "بيت التمويل الكويتي",
    desc: "عمل لمدة 19 سنة كمدير تنفيذي، واكتسب خبرات واسعة في الإدارة والتنظيم.",
  },
  {
    year: "1994 - حتى الآن",
    title: "ريادة الأعمال",
    desc: "صاحب ومدير عام مؤسسة البدري الدولية للتجارة بالقاهرة والكويت.",
  },
  {
    year: "2010",
    title: "الترشح لمجلس الشورى",
    desc: "مرشح عن دائرة مراكز (جرجا - العسيرات - المنشاة) بمحافظة سوهاج.",
  },
];

// شهادات التقدير والدروع
const achievements = [
  "درع تكريم من السفارة المصرية بالكويت تقديراً للجهود في العمل الاجتماعي",
  "درع تكريم من محافظة سوهاج لدعم المشاريع الخيرية والتنموية",
  "تكريم من فضيلة الشيخ محمد حسان لحفظه القرآن الكريم ودعمه للعمل الخيري",
  "تكريم من فضيلة الشيخ الدكتور أحمد عمر هاشم رئيس جامعة الأزهر سابقاً",
  "شهادات تقدير من الصحافة الكويتية والمصرية للعمل الخيري التطوعي",
  "تكريم من رابطة أبناء سوهاج بالقاهرة لدعمه المستمر لأبناء المحافظة",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <span className="tracking-[4px] uppercase text-yellow-400">
            ABOUT
          </span>

          <h2 className="mt-4 text-5xl font-black">
            نبذة عن الأستاذ عثمان أحمد محمد عبدالله البدري
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-yellow-500" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 shadow-2xl">
              <Image
                src="/images/profile/profile.jpg"
                alt={profile.shortName}
                width={470}
                height={620}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-yellow-400">
              {profile.name}
            </h3>

            <div className="mt-4 inline-block rounded-full bg-yellow-500/20 px-6 py-2 text-yellow-400">
              <span className="font-bold">العمر: {currentAge} سنة</span> (مواليد 1953)
            </div>

            <p className="mt-8 text-lg leading-10 text-slate-300">
              الأستاذ <strong className="text-yellow-400">
                عثمان أحمد محمد عبدالله البدري
              </strong>{" "}
              من مواليد عام <strong>1953</strong> بقرية
              <strong> كوم أشكيلو </strong>
              التابعة لمركز <strong>جرجا</strong> بمحافظة
              <strong> سوهاج</strong>.
              نشأ في أسرة مصرية أصيلة عُرفت بالالتزام بالقيم والعادات
              الراسخة، وكان لذلك بالغ الأثر في تكوين شخصيته، حيث اكتسب منذ
              سنواته الأولى روح المسؤولية والاعتماد على النفس والعمل الجاد،
              وهي المبادئ التي أصبحت أساسًا لمسيرته المهنية والإنسانية.
            </p>

            <p className="mt-6 text-lg leading-10 text-slate-300">
              أدى واجبه الوطني بالمشاركة في
              <strong className="text-yellow-400">
                {" "}حرب أكتوبر المجيدة عام 1973
              </strong>
              ، حيث عبر القناة مع أبناء مصر الأبطال ورابط على أرض سيناء،
              مدافعاً عن الحق في الحياة بعزة وكرامة. قبل أن ينتقل إلى دولة الكويت عام
              <strong> 1975 </strong>
              ليبدأ رحلة مهنية استمرت لعقود، حقق خلالها نجاحات متتالية في
              مجالات الإدارة والقيادة، وكان من أبرز محطاتها عمله لمدة
              <strong> تسعة عشر عامًا </strong>
              كمدير تنفيذي في بيت التمويل الكويتي، حيث اكتسب خبرات واسعة في الإدارة
              والتنظيم والعمل المؤسسي.
            </p>

            <p className="mt-6 text-lg leading-10 text-slate-300">
              واستكمالًا لمسيرته المهنية، اتجه إلى ريادة الأعمال، حيث أسس
              وأدار عددًا من الشركات الناجحة في جمهورية مصر العربية ودولة
              الكويت، واستطاع أن يبني نموذجًا إداريًا يقوم على الجودة
              والالتزام والاحترافية، مما ساهم في ترسيخ مكانة مجموعة شركاته
              في العديد من القطاعات الاقتصادية والخدمية.
            </p>

            <p className="mt-6 text-lg leading-10 text-slate-300">
              وإلى جانب نجاحه في قطاع الأعمال، كان للأستاذ عثمان أحمد محمد
              عبدالله البدري دورٌ بارز في خدمة المجتمع والعمل العام، حيث
              شارك في تأسيس ودعم العديد من الكيانات والروابط الاجتماعية
              والخيرية، وتولى عددًا من المناصب القيادية التي أسهم من خلالها
              في خدمة أبناء محافظة سوهاج والجالية المصرية بدولة الكويت،
              إيمانًا منه بأهمية العمل التطوعي وتعزيز روح التكافل بين أفراد
              المجتمع.
            </p>

            <p className="mt-6 text-lg leading-10 text-slate-300">
              يقول عن نفسه: 
              <span className="block mt-4 pr-4 border-r-4 border-yellow-500 text-slate-200 italic">
                &quot;يقولون أن العمل الاجتماعي هو الجسر الذي يربط بين المتطوع بالعمل والناس، 
                وعلى هذا القول أحببت العمل وخدمة الناس والتواصل معهم وحل مشاكلهم. 
                ومن البداية وحتى النهاية كان حب سوهاج الذي هو جزء من حب أكبر نكنه لمصر الغالية، 
                تاج على الرأس وأمانة في العنق.&quot;
              </span>
            </p>

            <p className="mt-6 text-lg leading-10 text-slate-300">
              وخلال مسيرته الممتدة لأكثر من خمسة عقود، حظي بالعديد من
              التكريمات وشهادات التقدير من جهات ومؤسسات مختلفة، تقديرًا
              لإسهاماته في مجالات الإدارة وريادة الأعمال والعمل المجتمعي،
              ليواصل حتى اليوم أداء رسالته بروح وطنية وإيمان راسخ بأن النجاح
              الحقيقي يقترن دائمًا بخدمة الإنسان والمجتمع.
            </p>

            {/* 1. عدادات متحركة (Animated Counters) */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Counter end={50} suffix="+" label="سنة خبرة" />
              <Counter end={19} label="سنة في بيت التمويل" />
              <Counter end={10} suffix="+" label="جمعيات ومؤسسات خيرية" />
              <Counter end={600} suffix="K" label="جالية مصرية بالكويت" />
            </div>

            {/* بطاقات المعلومات السريعة */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">تاريخ الميلاد</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">1953</h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">العمر</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">{currentAge} سنة</h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">محل الميلاد</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">
                  قرية كوم أشكيلو - جرجا - سوهاج
                </h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">سنوات الخبرة</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">
                  أكثر من 50 عامًا
                </h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">الوظيفة السابقة</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">
                  مدير تنفيذي - بيت التمويل الكويتي (19 سنة)
                </h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">الوظيفة الحالية</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">
                  صاحب ورئيس مجلس ادارة مجموعة شركات الامريكية
                </h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">دولة العمل</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">
                  مصر • الكويت
                </h4>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">المناصب الاجتماعية</p>
                <h4 className="mt-2 text-xl font-bold text-yellow-400">
                  رئيس اتحاد الروابط المصرية بالكويت سابقاً
                </h4>
              </div>
            </div>

            {/* الميزات الأساسية */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-yellow-500"
                  >
                    <Icon className="mb-4 text-3xl text-yellow-400" />
                    <h4 className="mb-2 text-xl font-bold">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-7 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* ميزات إضافية من السيرة الذاتية */}
            <div className="mt-8 border-t border-slate-800 pt-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                محطات بارزة في مسيرته
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {extraFeatures.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-yellow-500"
                    >
                      <Icon className="mb-4 text-3xl text-yellow-400" />
                      <h4 className="mb-2 text-xl font-bold">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-7 text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>

        {/* ======================== */}
        {/* 2. الجدول الزمني (Timeline) */}
        {/* ======================== */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-yellow-400">المسيرة الزمنية</h3>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-yellow-500" />
          </motion.div>

          <div className="relative">
            {/* الخط العمودي */}
            <div className="absolute right-1/2 top-0 h-full w-1 -translate-x-1/2 bg-yellow-500/30 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className={`bg-slate-900 p-6 rounded-2xl border border-yellow-500/20 ${
                      index % 2 === 0 ? "md:ml-auto md:max-w-md" : "md:mr-auto md:max-w-md"
                    }`}>
                      <span className="text-yellow-400 font-bold text-xl">{item.year}</span>
                      <h4 className="text-lg font-bold mt-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-slate-950 font-bold">
                    {index + 1}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================ */}
        {/* 4. شهادات التقدير والدروع */}
        {/* ================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-yellow-400">🏆 التكريمات والشهادات</h3>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-yellow-500" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-yellow-500 transition"
              >
                <FaAward className="text-yellow-400 text-2xl flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================================ */}
        {/* 5. مشروع المجمع الخيري */}
        {/* ================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="p-8 md:p-12 bg-gradient-to-r from-yellow-500/10 to-amber-600/10 rounded-3xl border border-yellow-500/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-yellow-400">🌟 حلم المجمع الخيري الشامل</h3>
              <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-yellow-500" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-6 bg-slate-900/50 rounded-2xl border border-yellow-500/20">
                <FaChild className="text-4xl text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-lg">دار أيتام</h4>
                <p className="text-sm text-slate-400">إيواء وتأهيل الأيتام نفسياً وعملياً</p>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-2xl border border-yellow-500/20">
                <FaHospital className="text-4xl text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-lg">مستوصف طبي</h4>
                <p className="text-sm text-slate-400">خدمات صحية وعلاجية للمحتاجين</p>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-2xl border border-yellow-500/20">
                <FaMosque className="text-4xl text-yellow-400 mx-auto mb-3" />
                <h4 className="font-bold text-lg">مسجد ودار مناسبات</h4>
                <p className="text-sm text-slate-400">مكان للعبادة والتجمعات الخيرية</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                يحلم الأستاذ عثمان البدري ببناء مجمع خيري شامل في مدينة بدر،
                يضم دار أيتام، دار للمعاقين، مستوصف طبي متخصص، مسجد،
                دار مناسبات، وورش مهنية لتأهيل الأيتام،
                <span className="text-yellow-400 font-bold"> بتكلفة تقدر بـ 15 مليون جنيه</span>.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-yellow-500/20 rounded-full text-yellow-400">
                <FaHome className="text-xl" />
                <span>تم تخصيص 10 أفدنة في مدينة بدر</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================================ */}
        {/* 7. كلمة ختامية من عثمان البدري */}
        {/* ================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="p-8 md:p-12 bg-slate-900/50 rounded-3xl border border-yellow-500/20 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">كلمة أخيرة</h3>
            <p className="text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
              &quot;أحب أشكر كل من ساهم في انتشار اسم عثمان البدري سواء على المستوى الخارجي بالكويت
              أو الداخلي بمصر، وهذا توفيق من الله سبحانه وتعالى، داعياً من المولى أن يحفظ مصر من كل مكروه
              ويوفقني دائماً لخدمة أهلي في الداخل والخارج وخدمة بلدنا مصر الحبيبة
              في ظل قيادة فخامة الرئيس المحبوب <strong className="text-yellow-400">عبدالفتاح السيسي</strong>.&quot;
            </p>
            <div className="mt-6 inline-block px-8 py-3 bg-yellow-500/20 rounded-full border border-yellow-500/30">
              <p className="text-yellow-400 font-bold text-lg">أخوكم / عثمان أحمد البدري</p>
            </div>
          </div>
        </motion.div>

        {/* ================================ */}
        {/* 6. زر تحميل السيرة PDF */}
        {/* ================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/cv/othman-albadri-cv.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-slate-950 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20"
          >
            <FaDownload />
            تحميل السيرة الذاتية كاملة (PDF)
          </a>
          <p className="text-slate-500 text-sm mt-3">
            * ملف PDF يحتوي على السيرة الذاتية الكاملة مع جميع التفاصيل والصور
          </p>
        </motion.div>

        {/* معلومات التواصل */}
        <div className="mt-16 border-t border-slate-800 pt-10">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
            معلومات التواصل
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-slate-300 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <FaPhone className="text-yellow-400" />
              <span>01001070686</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <FaEnvelope className="text-yellow-400" />
              <span>egku2012@hotmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>فيلا 267 - مدينة بدر</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <FaAward className="text-yellow-400" />
              <span>othman-elbadry-website.vercel.app</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}