export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed w-full top-0 left-0 bg-white shadow-md z-50 flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-500">Digest'Mass</h1>
        <nav className="space-x-4">
          <a href="#produits" className="text-sm font-medium hover:underline">Produits</a>
          <a href="#pourquoi" className="text-sm font-medium hover:underline">Pourquoi Digest'Mass</a>
          <a href="#contact" className="text-sm font-medium hover:underline">Contact</a>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Commander</button>
        </nav>
      </header>

      <section className="pt-32 px-6 text-center bg-yellow-50">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          La marque spécialisée dans la prise de masse <br />
          avec des formulations <span className="text-yellow-500">hautement digestibles</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Optimise ta digestion, maximise tes gains musculaires. Moins de gêne, plus de résultats.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 text-lg rounded-xl">Découvrir les produits</button>
      </section>

      <section className="px-6 py-16 text-center bg-white">
        <h3 className="text-2xl font-bold mb-10">Pourquoi Digest'Mass ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Haute digestibilité</h4>
            <p>Réduit les ballonnements et améliore l’assimilation des nutriments.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Ciblé prise de masse</h4>
            <p>Des apports nutritionnels équilibrés pour soutenir un surplus propre.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Absorption optimisée</h4>
            <p>Favorise des résultats visibles plus rapidement avec moins de déchets digestifs.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 py-10 bg-yellow-500 text-white text-center">
        <p>© 2025 Digest'Mass · Contact : info@digestmass.com</p>
      </footer>
    </main>
  );
}