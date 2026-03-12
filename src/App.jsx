import React from 'react'
import logo from './assets/ucmas-logo.png'
import heroImage from './assets/focus-superpower.png'
import aboutImage from './assets/memory-abacus.png'
import skillImage from './assets/essential-skills.png'
import promoSinhala from './assets/sinhala-promo.png'

export default function App() {
  const [trialForm, setTrialForm] = React.useState({
    parentName: '',
    childName: '',
    childAge: '',
    mobileNumber: '',
    preferredBranch: '',
    preferredDay: '',
    preferredTime: '',
    additionalNote: '',
  })

  const menuItems = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Benefits', 'benefits'],
    ['Programs', 'programs'],
    ['Branches', 'branches'],
    ['Trial Booking', 'trial-booking'],
    ['Contact', 'contact'],
    ['Privacy', 'privacy'],
  ]

  const facebookLink = 'https://www.facebook.com/share/17mmfpbcoE/'
  const whatsappBase = 'https://wa.me/94712300900'

  const branches = [
    {
      name: 'Galle',
      address: 'No 10, China Garden Road, Galle (Nena Piyasa Building)',
      phone: '0712300900',
      map: 'https://maps.app.goo.gl/M8cGsQafVtZZtZ3c7',
    },
    {
      name: 'Matara',
      address: 'Suratha Education Center, Near YMBA, Matara',
      phone: '0712300900',
      map: 'https://share.google/VvsgyN6e0b63SAd8D',
    },
  ]

  const benefits = [
    {
      title: 'Improves Memory',
      text: 'Children strengthen memory power through guided practice and mental visualization.',
    },
    {
      title: 'Builds Concentration',
      text: 'UCMAS helps children focus better and stay attentive for longer periods.',
    },
    {
      title: 'Speed & Accuracy',
      text: 'Regular training develops faster thinking and more accurate mental calculation.',
    },
    {
      title: 'Boosts Confidence',
      text: 'As children improve their abilities, they gain confidence in learning and daily life.',
    },
    {
      title: 'Whole Brain Development',
      text: 'The program supports imagination, listening ability, quick response, and analytical thinking.',
    },
    {
      title: 'Positive Learning Habits',
      text: 'Children develop discipline, consistency, patience, and active participation.',
    },
  ]

  const handleTrialInputChange = (field, value) => {
    setTrialForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleTrialSubmit = () => {
    const lines = [
      'Hello UCMAS Karapitiya,',
      '',
      'I would like to book a free trial session.',
      '',
      `Parent Name: ${trialForm.parentName || '-'}`,
      `Child Name: ${trialForm.childName || '-'}`,
      `Child Age: ${trialForm.childAge || '-'}`,
      `Mobile Number: ${trialForm.mobileNumber || '-'}`,
      `Preferred Branch: ${trialForm.preferredBranch || '-'}`,
      `Preferred Day: ${trialForm.preferredDay || '-'}`,
      `Preferred Time: ${trialForm.preferredTime || '-'}`,
      `Additional Note: ${trialForm.additionalNote || '-'}`,
    ]

    const text = encodeURIComponent(lines.join('\n'))
    window.open(`${whatsappBase}?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="UCMAS Sri Lanka" className="h-14 w-14 rounded-2xl object-cover ring-1 ring-red-100" />
            <div>
              <div className="text-xl font-bold tracking-tight text-red-700">UCMAS Karapitiya</div>
              <div className="text-xs text-slate-500">Operated by WODistributor</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {menuItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-medium text-slate-600 transition hover:text-red-700">
                {label}
              </a>
            ))}
          </nav>

          <a href={whatsappBase} target="_blank" rel="noreferrer" className="rounded-2xl bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            WhatsApp Us
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(254,242,242,0.95),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,247,237,0.9),_transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-red-200 bg-white px-3 py-1 text-sm font-medium text-red-700 shadow-sm">
                Trusted child mental development program
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Unlock Your Child&apos;s Full Brain Potential with UCMAS
                <span className="mt-3 block text-2xl font-semibold leading-snug text-red-700 md:text-3xl">
                  ඔබේ දරුවාගේ මොළයේ හැකියාවන් වර්ධනය කිරීමට අදම ආරම්භ කරන්න
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Help your child build stronger memory, better concentration, greater confidence, and faster calculation skills through a trusted and structured UCMAS learning experience.
                <span className="mt-3 block text-base leading-7 text-slate-600 md:text-lg">
                  මතක ශක්තිය, අවධානය, ආත්මවිශ්වාසය සහ වේගවත් ගණනය කිරීමේ හැකියාව වර්ධනය කරන විශ්වාසදායක UCMAS අත්දැකීමක් ඔබේ දරුවාට ලබා දෙන්න.
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#trial-booking" className="rounded-2xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">
                  Book a Free Trial / නොමිලේ Trial එකක් Book කරන්න
                </a>
                <a href={whatsappBase} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-700 hover:text-red-700">
                  Chat on WhatsApp / WhatsApp මඟින් අමතන්න
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['6', 'Month program'],
                  ['2h', 'Per week'],
                  ['Rs.2000', 'Registration'],
                  ['Rs.3000', 'Monthly fee'],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                    <div className="text-2xl font-bold text-red-700">{n}</div>
                    <div className="mt-1 text-sm text-slate-500">{l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500">Serving families through our Galle and Matara branches</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-100 via-amber-50 to-sky-50 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl ring-1 ring-slate-100">
                <img src={heroImage} alt="UCMAS focus and attention development" className="h-full w-full rounded-[1.5rem] object-cover" />
                <div className="mt-4 rounded-[1.5rem] bg-slate-50 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">UCMAS Karapitiya</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">Focus, confidence, and stronger brain skills for young minds</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A modern and supportive learning path that helps children improve concentration, memory, logic, and fast thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-100">
              <img src={aboutImage} alt="UCMAS memory and abacus training" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">About UCMAS</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                A Smarter Start for a Brighter Future
                <span className="mt-3 block text-xl font-semibold text-red-700 md:text-2xl">දීප්තිමත් අනාගතයක් සඳහා බුද්ධිමත් ආරම්භයක්</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                UCMAS is a globally recognized child development program designed to improve memory, concentration, listening ability, visualization, and confidence through structured abacus-based mental training.
                <span className="mt-3 block text-base leading-7 text-slate-600 md:text-lg">
                  UCMAS යනු abacus මූලික කරගත් පුහුණුවක් මඟින් මතක ශක්තිය, අවධානය, සවන්දීමේ හැකියාව, කල්පනා කිරීමේ හැකියාව සහ ආත්මවිශ්වාසය වර්ධනය කරන ජාත්‍යන්තර වශයෙන් පිළිගත් වැඩසටහනකි.
                </span>
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">Brain Skills</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Memory, concentration, confidence, mental speed, and attention development.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">Parent Friendly</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Simple trial booking, direct WhatsApp contact, and branch guidance for families.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                How UCMAS Helps Your Child
                <span className="mt-3 block text-xl font-semibold text-red-700 md:text-2xl">UCMAS ඔබේ දරුවාට උපකාරී වන ආකාරය</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">More than a mathematics program, UCMAS supports whole brain development and positive learning habits.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
                Learning outcomes
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Visual Highlights of What UCMAS Builds in Children</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Better focus, stronger memory, faster thinking, and more confident learning — presented in a cleaner, more visual way for parents.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  image: skillImage,
                  title: 'Essential Skills for Child Minds',
                  text: 'Supports concentration, visualization, speed, logic, and memory through structured mental training.',
                },
                {
                  image: aboutImage,
                  title: 'Abacus Training for Better Memory',
                  text: 'Abacus-based learning helps children improve memory, focus, calculation speed, and problem-solving confidence.',
                },
                {
                  image: heroImage,
                  title: 'Focus is a Superpower',
                  text: 'Children can train attention and concentration like a muscle with guided UCMAS practice and regular class work.',
                },
              ].map((item) => (
                <div key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100">
                  <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">A Proven Mental Development Program for Children</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The UCMAS program uses the abacus as a tool to activate both sides of the brain. Through guided learning, children improve concentration, memory, mental speed, confidence, and analytical thinking in an engaging classroom environment.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">This program supports not only academic performance, but also the overall development of a child&apos;s thinking ability and self-confidence.</p>
            </div>
            <div className="rounded-3xl bg-red-700 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Program Details / වැඩසටහන් විස්තර</h3>
              <div className="mt-6 space-y-4 text-base leading-7">
                <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-3"><span>Duration</span><span className="font-semibold">6 months</span></div>
                <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-3"><span>Class time</span><span className="font-semibold">2 hours per week</span></div>
                <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-3"><span>Registration fee</span><span className="font-semibold">Rs. 2,000</span></div>
                <div className="flex items-center justify-between gap-4 pb-1"><span>Monthly class fee</span><span className="font-semibold">Rs. 3,000</span></div>
              </div>
              <a href="#trial-booking" className="mt-8 inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:opacity-90">Book a Free Trial / නොමිලේ Trial එකක් Book කරන්න</a>
            </div>
          </div>
        </section>

        <section id="branches" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Our Branch Network</h2>
                <p className="mt-4 text-lg text-slate-600">Choose the center most convenient for your family and contact us for trial booking and enrollment support.</p>
              </div>
              <a href={whatsappBase} target="_blank" rel="noreferrer" className="w-fit rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-700 hover:text-red-700">
                Need help choosing a branch?
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {branches.map((branch) => (
                <div key={branch.name} className="group relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-red-50 transition group-hover:bg-red-100" />
                  <div className="relative">
                    <div className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Branch</div>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">{branch.name}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{branch.address}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={`tel:${branch.phone}`} className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-700 hover:text-red-700">Call Now</a>
                      <a href={`${whatsappBase}?text=${encodeURIComponent(`Hello UCMAS Karapitiya, I would like more details about the ${branch.name} branch.`)}`} target="_blank" rel="noreferrer" className="rounded-2xl bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">WhatsApp Now</a>
                      <a href={branch.map} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-700 hover:text-red-700">View Map</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trial-booking" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Book a Free Trial Session</h2>
              <p className="mt-3 block text-xl font-semibold text-red-700 md:text-2xl">නොමිලේ Trial Session එකක් වෙන්කරගන්න</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">Give your child the opportunity to experience the UCMAS learning method before enrolling. Our free trial session helps parents understand the program and gives children a chance to experience the classroom environment.</p>
              <div className="mt-8 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">What happens next?</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>• Submit your child&apos;s details and preferred branch.</li>
                  <li>• Our team will contact you to confirm the suitable day and time.</li>
                  <li>• The form opens WhatsApp with all entered details ready to send.</li>
                </ul>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleTrialSubmit(); }} className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 md:p-8">
              <div className="grid gap-4">
                <input value={trialForm.parentName} onChange={(e) => handleTrialInputChange('parentName', e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Parent Name" />
                <input value={trialForm.childName} onChange={(e) => handleTrialInputChange('childName', e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Child Name" />
                <input value={trialForm.childAge} onChange={(e) => handleTrialInputChange('childAge', e.target.value)} inputMode="numeric" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Child Age" />
                <input value={trialForm.mobileNumber} onChange={(e) => handleTrialInputChange('mobileNumber', e.target.value)} inputMode="tel" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Mobile Number" />
                <select value={trialForm.preferredBranch} onChange={(e) => handleTrialInputChange('preferredBranch', e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-500 outline-none focus:border-red-700">
                  <option value="">Preferred Branch</option>
                  <option>Galle</option>
                  <option>Matara</option>
                </select>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input value={trialForm.preferredDay} onChange={(e) => handleTrialInputChange('preferredDay', e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Preferred Day" />
                  <input value={trialForm.preferredTime} onChange={(e) => handleTrialInputChange('preferredTime', e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Preferred Time" />
                </div>
                <textarea value={trialForm.additionalNote} onChange={(e) => handleTrialInputChange('additionalNote', e.target.value)} className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Additional Note" />
                <button type="submit" className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">Book My Free Trial</button>
                <p className="text-xs leading-5 text-slate-500">Your details will be used only to contact you regarding your trial booking and enrollment inquiry.</p>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Sinhala highlight</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">A Local Parent-Friendly Message for Your Audience</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  This section gives the website a stronger Sri Lankan parent connection with a familiar Sinhala promotional visual while keeping the overall site professional.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  It helps visitors feel that UCMAS Karapitiya understands local parents, children, and the kind of education-focused growth they are looking for.
                </p>
              </div>
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-100">
                <img src={promoSinhala} alt="UCMAS Sinhala promotional visual" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Why parents trust us</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">More Than a Class — A Stronger Foundation for Your Child</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Parents choose UCMAS because it supports concentration, memory, confidence, discipline, and faster thinking in a structured and encouraging learning environment.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ['Confidence Building', 'Children gain confidence as they improve focus, speed, and performance through guided practice.'],
                ['Supportive Learning', 'We focus on a positive, parent-friendly, and child-friendly environment that encourages steady progress.'],
                ['Practical Brain Development', 'UCMAS helps children strengthen memory, attention, listening, accuracy, and fast mental response.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] bg-slate-50 p-7 ring-1 ring-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-red-700 via-red-800 to-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Start today</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">Give Your Child the Opportunity to Grow with UCMAS</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Book a free trial, speak to our team on WhatsApp, and find the right branch for your child&apos;s learning journey.</p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href="#trial-booking" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-red-700 shadow-lg transition hover:opacity-90">Book a Free Trial</a>
                <a href={whatsappBase} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-red-700">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">FAQ</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Quick answers for parents who want to know more before booking a trial.</p>
            </div>
            <div className="mt-10 space-y-4">
              {[
                ['What is UCMAS?', 'UCMAS is a child mental development program that helps improve memory, concentration, confidence, and fast thinking through abacus-based training.'],
                ['How long is the program?', 'The program duration shown on this website is 6 months, with classes conducted for 2 hours per week.'],
                ['What are the fees?', 'Registration fee is Rs. 2,000 and the monthly class fee is Rs. 3,000.'],
                ['How can I book a free trial?', 'You can fill in the trial booking form on this website or contact us directly on WhatsApp to arrange a suitable day and time.'],
                ['Which branches are available?', 'We currently show Galle and Matara branch details on this website. You can contact us if you need help choosing the most suitable branch.'],
              ].map(([q, a]) => (
                <div key={q} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900">{q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="privacy" className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-700">Privacy</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Privacy Policy</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">We respect your privacy. Information shared through this website is used only to contact you regarding trial bookings, program details, and enrollment-related communication.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">What we collect</h3>
                <p className="mt-2 leading-7 text-slate-600">Parent name, child name, child age, mobile number, preferred branch, and booking details entered through the website forms.</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">How we use it</h3>
                <p className="mt-2 leading-7 text-slate-600">We use your details only to respond to inquiries, confirm trial sessions, and support the enrollment process for UCMAS Karapitiya.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Get in Touch with UCMAS Karapitiya
                <span className="mt-3 block text-xl font-semibold text-red-300 md:text-2xl">UCMAS Karapitiya සමඟ අදම සම්බන්ධ වන්න</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">We are here to help you with program details, branch selection, trial bookings, and enrollment information.</p>
              <div className="mt-8 space-y-3 text-slate-200">
                <p><span className="font-semibold">Hotline:</span> 0712300900</p>
                <p><span className="font-semibold">Email:</span> ucmaskarapitiya@gmail.com</p>
                <p><span className="font-semibold">Address:</span> 256 A, Morris Road, Welipatha, Labuduwa, Galle</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:0712300900" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90">Call Us</a>
                <a href={whatsappBase} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900">WhatsApp Us</a>
                <a href={facebookLink} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900">Facebook Page</a>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-xl md:p-8">
              <h3 className="text-2xl font-bold text-slate-900">Send a Message / පණිවිඩයක් යවන්න</h3>
              <div className="mt-6 grid gap-4">
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Name" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Phone Number" />
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Email" />
                <textarea className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-red-700" placeholder="Message" />
                <button type="button" className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">Send a Message / පණිවිඩයක් යවන්න</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <div className="text-lg font-bold text-red-700">UCMAS Karapitiya</div>
            <div className="text-xs text-slate-500">Operated by WODistributor</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Helping children improve memory, concentration, confidence, and mental development through a structured and trusted UCMAS learning experience.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              {menuItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="transition hover:text-red-700">{label}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>0712300900</p>
              <p>ucmaskarapitiya@gmail.com</p>
              <p>256 A, Morris Road, Welipatha, Labuduwa, Galle</p>
              <a href={facebookLink} target="_blank" rel="noreferrer" className="block transition hover:text-red-700">Facebook Page</a>
              <a href="#privacy" className="block transition hover:text-red-700">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:flex-row">
        <a href="#trial-booking" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-red-700 shadow-2xl ring-1 ring-slate-200 transition hover:opacity-90">Book Free Trial</a>
        <a href={whatsappBase} target="_blank" rel="noreferrer" className="rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:opacity-90">WhatsApp</a>
      </div>
    </div>
  )
}
