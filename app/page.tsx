export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800">

      {/* PORTADA */}
      <section className="bg-emerald-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-black">
            Ahfad Al-Khair
          </h1>

          <p className="mt-6 text-xl text-emerald-100">
            Asociación para la Salud y el Desarrollo Sostenible
          </p>

          <p className="mt-4 text-emerald-200">
            Guercif - Marruecos
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/212658743564"
              target="_blank"
              className="bg-white text-emerald-900 px-7 py-4 rounded-2xl font-bold"
            >
              WhatsApp
            </a>

            <a
              href="https://paypal.me/HosaineAmezian"
              target="_blank"
              className="border border-white px-7 py-4 rounded-2xl"
            >
              Donar
            </a>

          </div>

        </div>
      </section>


      {/* QUIENES SOMOS */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold">
          Quiénes Somos
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          La Asociación Ahfad Al-Khair para la Salud y el Desarrollo Sostenible
          fue fundada el 11/11/2025 en Douar Ankid, Mazkitam, Guercif.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Presidente de la asociación:
          <strong> Mohamed Sekkiou</strong>
        </p>

      </section>


      {/* MISION */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold">
            Nuestra Misión
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-8 rounded-3xl shadow border">
              <h3 className="text-2xl font-bold">
                Salud
              </h3>
              <p className="mt-4">
                Campañas médicas, prevención y apoyo sanitario.
              </p>
            </div>


            <div className="p-8 rounded-3xl shadow border">
              <h3 className="text-2xl font-bold">
                Solidaridad
              </h3>
              <p className="mt-4">
                Ayuda a familias y personas en situación vulnerable.
              </p>
            </div>


            <div className="p-8 rounded-3xl shadow border">
              <h3 className="text-2xl font-bold">
                Desarrollo
              </h3>
              <p className="mt-4">
                Formación, jóvenes, mujeres y proyectos comunitarios.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* PROYECTOS */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold">
          Nuestros Proyectos
        </h2>

        <ul className="mt-8 space-y-4 text-lg">

          <li>
            ♿ Apoyo a personas con discapacidad y movilidad reducida.
          </li>

          <li>
            🏥 Salud y prevención de enfermedades.
          </li>

          <li>
            🏠 Rehabilitación de espacios comunitarios.
          </li>

          <li>
            🤝 Campañas humanitarias y voluntariado.
          </li>

        </ul>

      </section>


      {/* CONTACTO */}
      <section className="bg-emerald-900 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold">
          Contacto
        </h2>

        <p className="mt-4">
          association.ahfadlkhayr@gmail.com
        </p>

        <a
          href="https://facebook.com/profile.php?id=61576316788730"
          target="_blank"
          className="inline-block mt-6 underline"
        >
          Facebook
        </a>

      </section>


    </main>
  )
}
