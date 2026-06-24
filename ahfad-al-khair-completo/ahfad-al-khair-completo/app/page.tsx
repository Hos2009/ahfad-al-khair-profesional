export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800">

      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <img src="/images/logo.png" className="w-40 mx-auto rounded-full" />
        <h1 className="text-5xl font-black mt-6">Ahfad Al-Khair</h1>
        <p className="mt-4 text-xl">Asociación para la Salud y el Desarrollo Sostenible</p>
        <p>Guercif - Marruecos</p>
 
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="https://wa.me/212658743564"
          className="bg-white text-emerald-900 px-6 py-3 rounded-2xl font-bold">
          WhatsApp</a>

          <a href="https://paypal.me/HosaineAmezian"
          className="border border-white px-6 py-3 rounded-2xl">
          Donar</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold">Quiénes Somos</h2>
        <p className="mt-4">
        Asociación fundada el 11/11/2025 en Douar Ankid, Mazkitam, Guercif.
        Presidente: Mohamed Sekkiou.
        </p>

        <h2 className="text-4xl font-bold mt-12">Nuestros Proyectos</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <img src="/images/logo.png"  className="rounded-3xl"/>
          <img src="/images/salud.jpg" className="rounded-3xl"/>
          <img src="/images/proyecto.jpg" className="rounded-3xl"/>
          <img src="/images/proyecto2.jpg" className="rounded-3xl"/>
        </div>
      </section>

      <footer className="bg-emerald-900 text-white text-center p-8">
      association.ahfadlkhayr@gmail.com
      </footer>

    </main>
  )
}
