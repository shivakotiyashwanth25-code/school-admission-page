import { useEffect, useState } from "react";
import {
  ArrowUp,
  BookOpen,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Salad,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
  X
} from "lucide-react";
import { motion } from "framer-motion";
import { images } from "./assets/imageUrls";
import GoogleAuthButton from "./components/GoogleAuthButton";

const navLinks = ["Home", "Programs", "About", "Gallery", "Contact"];

const schoolName = "Little Scholars Academy";

const programs = [
  {
    title: "Play Group",
    age: "Age 1.8 - 2.5 years",
    icon: Sparkles,
    color: "bg-coral",
    text: "A warm transition from home to school with language-rich play, music, movement, and sensory discovery."
  },
  {
    title: "Nursery",
    age: "Age 2.5 - 3.5 years",
    icon: BookOpen,
    color: "bg-skybrand",
    text: "Structured early learning that builds vocabulary, number sense, social confidence, and classroom routines."
  },
  {
    title: "Kindergarten",
    age: "Age 3.5 - 5.5 years",
    icon: GraduationCap,
    color: "bg-plum",
    text: "Phonics, early numeracy, project work, storytelling, and school readiness with individual attention."
  },
  {
    title: "Daycare",
    age: "Age 1.8 - 8 years",
    icon: HeartHandshake,
    color: "bg-mint",
    text: "Full-day care with nutritious meals, rest time, supervised play, homework support, and parent updates."
  }
];

const features = [
  ["Safe Environment", ShieldCheck],
  ["Experienced Teachers", Users],
  ["Smart Learning", BookOpen],
  ["Activity-Based Curriculum", Sparkles],
  ["Healthy Meals", Salad],
  ["CCTV Security", Camera]
];

const gallery = [
  ["Annual Day Stage Event", images.gallery[0]],
  ["Sports Day", images.gallery[1]],
  ["Art Activities", images.gallery[2]],
  ["Festival Celebrations", images.gallery[3]]
];

const testimonials = [
  {
    name: "Priya Sharma",
    image: images.parents[0],
    text: "The teachers helped my daughter settle in beautifully. She now wakes up excited for school every morning."
  },
  {
    name: "Rahul Mehta",
    image: images.parents[1],
    text: "The daycare updates, clean campus, and caring staff give us real peace of mind during work hours."
  },
  {
    name: "Ananya Iyer",
    image: images.parents[2],
    text: "Their activity-based learning is wonderful. My son became more confident, curious, and independent."
  }
];

const admissionSteps = [
  ["1", "Submit Enquiry", "Share parent and child details through the booking form."],
  ["2", "Campus Visit", "Meet our admission counsellor and explore classrooms, play areas, and safety systems."],
  ["3", "Demo Class", "Let your child experience a friendly class with our early-years teachers."],
  ["4", "Confirm Seat", "Complete documents and fee formalities after counsellor guidance."]
];

const faqs = [
  ["What is the admission process?", "Fill the enquiry form, schedule a campus visit, attend a short interaction, and complete the admission formalities."],
  ["How can I know the fee structure?", "The counsellor shares the latest fee details during your visit or demo class booking call."],
  ["What are the school timings?", "Preschool runs from 9:00 AM to 12:30 PM. Daycare options are available until 6:30 PM."],
  ["Is transport available?", "Yes, route-based transport is available with verified drivers and attendant support."],
  ["Do you offer full-day daycare?", "Yes, parents can choose half-day, extended-day, or full-day daycare plans."]
];

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus-ring focus:border-skybrand dark:border-slate-700 dark:bg-slate-900 dark:text-white";

function scrollToId(label) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/85 shadow-sm backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/80">
      <nav className="section-shell flex h-20 items-center justify-between">
        <button onClick={() => scrollToId("Home")} className="flex items-center gap-3 focus-ring rounded-2xl">
          <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-sunshine via-coral to-mint text-white shadow-lg">
            <GraduationCap size={28} />
          </span>
          <span className="text-left">
            <span className="block font-display text-lg font-black text-slate-950 dark:text-white">{schoolName}</span>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-300">Preschool | Daycare | Kindergarten</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToId(link)}
              className="rounded-xl text-sm font-semibold text-slate-700 transition hover:text-coral focus-ring dark:text-slate-200"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <GoogleAuthButton />
          <button
            onClick={() => setDarkMode((value) => !value)}
            className="grid size-11 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:scale-105 dark:bg-slate-800 dark:text-slate-100"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            onClick={() => scrollToId("booking")}
            className="rounded-full bg-gradient-to-r from-coral to-plum px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-soft focus-ring"
          >
            Apply Now
          </button>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full bg-slate-100 lg:hidden dark:bg-slate-800"
          aria-label="Open navigation menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="section-shell pb-5 lg:hidden">
          <div className="rounded-3xl bg-white p-3 shadow-soft dark:bg-slate-900">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setOpen(false);
                  scrollToId(link);
                }}
                className="block w-full rounded-2xl px-4 py-3 text-left font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => setDarkMode((value) => !value)}
              className="mt-2 w-full rounded-2xl bg-slate-100 px-4 py-3 text-left font-semibold dark:bg-slate-800"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <div className="mt-3 px-1">
              <GoogleAuthButton compact />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff2a8,transparent_30%),linear-gradient(135deg,#fff8ed_0%,#eaf7ff_48%,#fff2f5_100%)] pt-32 dark:bg-[linear-gradient(135deg,#111827,#172033)]">
      <div className="section-shell grid min-h-[calc(100vh-3rem)] items-center gap-10 pb-16 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-coral shadow-md dark:bg-slate-900">
            <CalendarCheck size={17} /> Admissions Open for Academic Year 2026-27
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-black leading-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Admissions Open 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-200">
            Give your child a safe, joyful, and academically strong start with caring teachers, modern classrooms, and activity-based learning.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => scrollToId("booking")} className="rounded-full bg-coral px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-plum focus-ring">
              Book a Campus Visit
            </button>
            <button onClick={() => scrollToId("Programs")} className="rounded-full bg-white px-7 py-4 font-bold text-slate-900 shadow-lg transition hover:-translate-y-1 focus-ring dark:bg-slate-900 dark:text-white">
              Explore Programs
            </button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["900+", "Students Nurtured"],
              ["15+", "Years of Trust"],
              ["8:1", "Student Teacher Ratio"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl bg-white/80 p-4 text-center shadow-md backdrop-blur dark:bg-slate-900/70">
                <strong className="block text-2xl text-slate-950 dark:text-white">{value}</strong>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -left-4 top-6 z-10 rounded-3xl bg-white px-4 py-3 font-bold text-mint shadow-soft dark:bg-slate-900">
            <ShieldCheck className="inline" size={20} /> Verified Safe Campus
          </div>
          <img src={images.hero} alt="Teacher helping young children in a real classroom" className="h-[360px] w-full rounded-[2rem] object-cover shadow-soft sm:h-[480px]" />
          <div className="absolute -bottom-6 right-4 rounded-3xl bg-sunshine px-5 py-4 font-black text-slate-950 shadow-soft">
            Limited Seats for 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="bg-white py-20 dark:bg-slate-950">
      <div className="section-shell">
        <SectionTitle eyebrow="Programs" title="Admission programs for every early learner" text="Choose the right program based on your child's age, routine, and learning readiness." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.article whileHover={{ y: -8 }} key={program.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition dark:border-slate-800 dark:bg-slate-900">
                <span className={`${program.color} grid size-14 place-items-center rounded-2xl text-white shadow-md`}>
                  <Icon size={28} />
                </span>
                <h3 className="mt-5 text-xl font-black">{program.title}</h3>
                <p className="mt-2 text-sm font-bold text-coral">{program.age}</p>
                <p className="mt-4 min-h-24 text-sm leading-6 text-slate-600 dark:text-slate-300">{program.text}</p>
                <button onClick={() => scrollToId("booking")} className="mt-5 rounded-full bg-slate-100 px-5 py-3 text-sm font-bold transition hover:bg-skybrand hover:text-white dark:bg-slate-800">
                  Enquire Now
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AdmissionProcess() {
  return (
    <section className="bg-[#fffaf0] py-20 dark:bg-slate-900">
      <div className="section-shell">
        <SectionTitle eyebrow="Admission Process" title="Simple, transparent, parent-friendly" text="From first enquiry to confirmed seat, our counsellor guides you at every step." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {admissionSteps.map(([number, title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-950">
              <span className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white dark:bg-sunshine dark:text-slate-950">
                {number}
              </span>
              <h3 className="mt-5 text-lg font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#f4fbff] py-20 dark:bg-slate-900">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">Why choose us</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl dark:text-white">A campus built for safety, confidence, and everyday learning</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Parents choose {schoolName} for our trained teachers, secure campus, balanced routine, and regular communication. Children get real classrooms, play areas, activity labs, and a caring team that knows them by name.
            </p>
            <img src={images.campus} alt="Bright school corridor and classroom area" className="mt-8 h-72 w-full rounded-[2rem] object-cover shadow-soft" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(([label, Icon], index) => (
              <div key={label} className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950">
                <span className={`grid size-12 place-items-center rounded-2xl text-white ${["bg-coral", "bg-skybrand", "bg-mint", "bg-plum", "bg-sunshine", "bg-slate-900 dark:bg-slate-700"][index]}`}>
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 text-lg font-black">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Professional systems and caring routines that help children feel settled, safe, and ready to learn.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 dark:bg-slate-950">
      <div className="section-shell">
        <SectionTitle eyebrow="Campus Gallery" title="A real school day at a glance" text="Classroom learning, group activities, creative projects, and celebrations from our early-years program." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map(([label, src]) => (
            <figure key={label} className="group relative h-72 overflow-hidden rounded-3xl shadow-lg">
              <img src={src} alt={`${label} at school`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 text-lg font-black text-white">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#fff7dd] py-20 dark:bg-slate-900">
      <div className="section-shell">
        <SectionTitle eyebrow="Parent Testimonials" title="Trusted by families year after year" text="Parents value our communication, safety standards, and visible learning progress." />
        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] bg-white p-6 text-center shadow-soft dark:bg-slate-950 sm:p-10">
          <img src={current.image} alt={current.name} className="mx-auto size-20 rounded-full object-cover ring-4 ring-sunshine" />
          <div className="mt-5 flex justify-center gap-1 text-sunshine">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">"{current.text}"</p>
          <h3 className="mt-5 text-xl font-black">{current.name}</h3>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={() => setIndex((index + testimonials.length - 1) % testimonials.length)} className="grid size-11 place-items-center rounded-full bg-slate-100 transition hover:bg-coral hover:text-white dark:bg-slate-800" aria-label="Previous testimonial">
              <ChevronLeft />
            </button>
            <button onClick={() => setIndex((index + 1) % testimonials.length)} className="grid size-11 place-items-center rounded-full bg-slate-100 transition hover:bg-coral hover:text-white dark:bg-slate-800" aria-label="Next testimonial">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferBanner() {
  return (
    <section className="bg-white py-10 dark:bg-slate-950">
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-gradient-to-r from-coral via-plum to-skybrand p-8 text-white shadow-soft md:flex-row md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-white/80">Admissions 2026-27</p>
            <h2 className="mt-2 text-3xl font-black">Limited Seats Available - Enroll Today!</h2>
          </div>
          <button onClick={() => scrollToId("booking")} className="rounded-full bg-white px-7 py-4 font-black text-plum transition hover:-translate-y-1 focus-ring">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [form, setForm] = useState({ parent: "", child: "", age: "", phone: "", email: "", date: "", program: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSuccess(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.parent.trim()) nextErrors.parent = "Parent name is required";
    if (!form.child.trim()) nextErrors.child = "Child name is required";
    if (!form.age || Number(form.age) < 1) nextErrors.age = "Enter a valid age";
    if (!/^[6-9]\d{9}$/.test(form.phone)) nextErrors.phone = "Enter a valid 10-digit phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.date) nextErrors.date = "Choose a preferred date";
    if (!form.program) nextErrors.program = "Select a program";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      setForm({ parent: "", child: "", age: "", phone: "", email: "", date: "", program: "" });
    }
  };

  return (
    <section id="booking" className="bg-[#eefdf9] py-20 dark:bg-slate-900">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">Admission Enquiry</p>
          <h2 className="mt-3 text-4xl font-black text-slate-950 dark:text-white">Book a campus visit or demo class</h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            Share your details and our admission counsellor will call you to confirm the visit, explain fees, and help you choose the right program.
          </p>
          <div className="mt-8 space-y-4">
            <InfoLine icon={Phone} text="+91 98765 43210" />
            <InfoLine icon={Mail} text="admissions@littlescholars.edu" />
            <InfoLine icon={Clock} text="Mon-Sat, 9:00 AM - 6:30 PM" />
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[2rem] bg-white p-6 shadow-soft dark:bg-slate-950 sm:p-8" noValidate>
          {success && (
            <div className="mb-5 flex items-center gap-3 rounded-2xl bg-mint/10 p-4 font-bold text-mint">
              <CheckCircle2 /> Thank you! Our admission counsellor will contact you shortly.
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Parent Name" error={errors.parent}>
              <input className={inputClass} value={form.parent} onChange={(e) => update("parent", e.target.value)} placeholder="Enter parent name" />
            </Field>
            <Field label="Child Name" error={errors.child}>
              <input className={inputClass} value={form.child} onChange={(e) => update("child", e.target.value)} placeholder="Enter child name" />
            </Field>
            <Field label="Age" error={errors.age}>
              <input className={inputClass} type="number" min="1" value={form.age} onChange={(e) => update("age", e.target.value)} placeholder="Child age" />
            </Field>
            <Field label="Phone Number" error={errors.phone}>
              <input className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="10-digit mobile" />
            </Field>
            <Field label="Email" error={errors.email}>
              <input className={inputClass} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
            </Field>
            <Field label="Preferred Date" error={errors.date}>
              <input className={inputClass} type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
            </Field>
            <Field label="Program Selection" error={errors.program} wide>
              <select className={inputClass} value={form.program} onChange={(e) => update("program", e.target.value)}>
                <option value="">Select program</option>
                {programs.map((program) => (
                  <option key={program.title}>{program.title}</option>
                ))}
              </select>
            </Field>
          </div>
          <button className="mt-6 w-full rounded-full bg-gradient-to-r from-coral to-plum px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 focus-ring">
            Submit Admission Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children, wide }) {
  return (
    <label className={wide ? "sm:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs font-bold text-coral">{error}</span>}
    </label>
  );
}

function InfoLine({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold shadow-md dark:bg-slate-950">
      <span className="grid size-10 place-items-center rounded-xl bg-sunshine text-slate-950">
        <Icon size={20} />
      </span>
      {text}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="section-shell max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="Admission questions" text="Quick answers before you schedule a visit." />
        <div className="mt-10 space-y-4">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-md dark:border-slate-800 dark:bg-slate-900">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 text-left font-black focus-ring rounded-2xl">
                {question}
                <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              {open === index && <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-sunshine to-coral">
              <GraduationCap />
            </span>
            <span className="text-xl font-black">{schoolName}</span>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            A trusted preschool, daycare, and kindergarten focused on safe care, joyful learning, and confident school readiness.
          </p>
        </div>
        <div>
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-4 space-y-3 text-slate-300">
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollToId(link)} className="block transition hover:text-sunshine">
                {link}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-2"><MapPin size={18} /> 21 Rainbow Lane, Pune</p>
            <p className="flex gap-2"><Phone size={18} /> +91 98765 43210</p>
            <p className="flex gap-2"><Mail size={18} /> admissions@littlescholars.edu</p>
          </div>
          <div className="mt-5 flex gap-3">
            {["f", "in", "ig"].map((social) => (
              <a key={social} href="#" className="grid size-10 place-items-center rounded-full bg-white/10 font-bold transition hover:bg-coral" aria-label={`Visit ${social}`}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        Copyright 2026 {schoolName}. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="https://wa.me/917780144139" className="fixed bottom-5 left-5 z-40 rounded-full bg-[#25D366] px-5 py-3 font-black text-white shadow-soft transition hover:-translate-y-1">
        WhatsApp
      </a>
      {visible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-slate-950 text-white shadow-soft transition hover:-translate-y-1 dark:bg-white dark:text-slate-950" aria-label="Scroll to top">
          <ArrowUp />
        </button>
      )}
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Programs />
        <AdmissionProcess />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <OfferBanner />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
