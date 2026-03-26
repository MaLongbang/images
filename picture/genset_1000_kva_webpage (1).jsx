export default function GensetPage() {
  const company = {
    name: "WEIFANG YONGNENG POWER ELECTROMECHANICAL EQUIPMENT CO., LTD.",
    brand: "YNGENSET",
    contact: "+86 1579 4370 930",
    email: "kual0929@gmail.com",
    location: "Weifang City, Shandong, China"
  };
  const engineSpecs = [
    ["Model Mesin", "Cummins KTA50-G8"],
    ["Daya 1 Jam", "1429 kW"],
    ["Sistem Pendingin", "Pendingin air tertutup"],
    ["Metode Start", "24V DC electric start"],
    ["Jumlah Silinder", "16 silinder"],
    ["Kapasitas Silinder", "50.3 L"],
    ["Sistem Bahan Bakar", "Direct injection"],
    ["Susunan Silinder", "Tipe V"],
    ["Rasio Kompresi", "14.9 : 1"],
    ["Kapasitas Oli", "294 L"],
  ];

  const alternatorSpecs = [
    ["Merek Alternator", "Stamford"],
    ["Kapasitas", "1400 kVA"],
    ["Tegangan", "400/230V"],
    ["Frekuensi", "50Hz"],
    ["Power Factor", "0.8"],
    ["Tipe", "Brushless, full copper"],
    ["Kelas Isolasi", "Class H"],
    ["Perlindungan", "IP23"],
    ["Koneksi", "Y type"],
    ["THF", "< 2%"],
  ];

  const controlSpecs = [
    ["Pabrikan", "Smartgen"],
    ["Model", "6110"],
    ["Negara Asal", "China"],
    ["Tampilan", "Display meter digital"],
    ["Monitoring Mesin", "Tekanan oli, suhu air, putaran mesin, tegangan baterai, frekuensi"],
    ["Monitoring Generator", "Tegangan, arus, deteksi 3 fase"],
    ["Data Terintegrasi", "kVA, kW, kVAr, kWh, kWArh"],
    ["APP Remote", "Opsional monitoring dan kontrol via aplikasi"],
  ];

  const standardConfig = [
    "Mesin diesel, filter diesel, filter udara, filter oli, charger, motor starter",
    "Alternator brushless full copper merek Stamford",
    "Panel kontrol LCD, pengatur tegangan elektronik",
    "Radiator pendingin air, base frame baja, anti-vibration mount",
    "Silencer, baterai, kabel baterai, oli, bantalan tahan guncangan",
  ];

  const features = [
    "Cocok untuk proyek industri, pabrik, tambang, dan sistem tenaga berkelanjutan",
    "Dukungan operasi paralel / sinkronisasi multi-unit",
    "Stabil untuk pemakaian jangka panjang 24 jam",
    "Mudah perawatan dan suku cadang tersedia",
    "Dapat disesuaikan untuk open type, silent type, atau container type",
  ];

  const fuelData = [
    ["50% Load", "110–130 L/jam"],
    ["75% Load", "160–180 L/jam"],
    ["100% Load", "210–230 L/jam"],
  ];

  const TableSection = ({ title, rows }) => (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base">
          <tbody>
            {rows.map(([label, value], idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                <td className="px-6 py-4 font-medium text-slate-700 w-1/3 border-b border-slate-100">{label}</td>
                <td className="px-6 py-4 text-slate-900 border-b border-slate-100">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-xl font-bold tracking-wide">YNGENSET</div>
              <div className="text-sm text-slate-300">WEIFANG YONGNENG POWER</div>
            </div>
            <div className="text-sm text-slate-300">
              <div>📞 {company.contact}</div>
              <div>✉️ {company.email}</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm mb-6 border border-white/15">
              Solusi Daya Industri • 1000kW / 1250kVA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Genset Cummins 1000kW
              <span className="block text-sky-300 mt-2">dengan Alternator Stamford</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-200 leading-8">
              Solusi genset heavy-duty untuk operasi berkelanjutan, proyek industri, sistem paralel, dan kebutuhan tenaga skala besar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-2xl bg-emerald-400 text-slate-900 px-4 py-2 font-medium">PLN Project Ready</span>
              <span className="rounded-2xl bg-white text-slate-900 px-4 py-2 font-medium">50Hz</span>
              <span className="rounded-2xl bg-white text-slate-900 px-4 py-2 font-medium">400/230V</span>
              <span className="rounded-2xl bg-white text-slate-900 px-4 py-2 font-medium">24 Jam Operasi</span>
              <span className="rounded-2xl bg-white text-slate-900 px-4 py-2 font-medium">Parallel Ready</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14 space-y-10">
        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-3 bg-emerald-50 border border-emerald-200 rounded-3xl p-6 text-center">
            <h2 className="text-xl font-semibold text-emerald-700">Dirancang untuk Proyek PLN & Sistem Paralel Industri</h2>
            <p className="mt-2 text-slate-600">Solusi ini cocok untuk pembangkit listrik skala besar, kontrak PLN, dan sistem continuous power.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <div className="text-sm text-slate-500">Output Utama</div>
            <div className="mt-2 text-3xl font-bold">1000 kW</div>
            <div className="text-slate-600 mt-1">Sekitar 1250 kVA</div>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <div className="text-sm text-slate-500">Alternator</div>
            <div className="mt-2 text-3xl font-bold">Stamford</div>
            <div className="text-slate-600 mt-1">Brushless, full copper</div>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <div className="text-sm text-slate-500">Aplikasi</div>
            <div className="mt-2 text-3xl font-bold">Industri</div>
            <div className="text-slate-600 mt-1">Continuous & parallel system</div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-7">
            <h2 className="text-2xl font-semibold">Keunggulan Utama</h2>
            <ul className="mt-6 space-y-4">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500 shrink-0" />
                  <span className="text-slate-700 leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-7">
            <h2 className="text-2xl font-semibold">Konsumsi Bahan Bakar (Referensi)</h2>
            <div className="mt-6 space-y-4">
              {fuelData.map(([load, value], idx) => (
                <div key={idx} className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4">
                  <span className="font-medium text-slate-700">{load}</span>
                  <span className="text-lg font-semibold text-slate-900">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500 leading-6">
              Catatan: Konsumsi aktual dapat berbeda tergantung kondisi kerja, kualitas bahan bakar, suhu lingkungan, dan faktor beban.
            </p>
          </div>
        </section>

        <TableSection title="Spesifikasi Mesin Diesel" rows={engineSpecs} />
        <TableSection title="Spesifikasi Alternator" rows={alternatorSpecs} />
        <TableSection title="Sistem Kontrol" rows={controlSpecs} />

        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Konfigurasi Standar</h2>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-4">
            {standardConfig.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 leading-7">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white rounded-3xl shadow-sm p-8 md:p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Pilihan Sistem</h2>
              <p className="mt-4 text-slate-300 leading-8">
                Dapat disiapkan untuk single unit, parallel system multi-unit, atau solusi containerized power station sesuai kebutuhan proyek Anda.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <div className="font-semibold">Open Type</div>
                <div className="text-slate-300 mt-1">Untuk ruang mesin / pembangkit tetap</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <div className="font-semibold">Silent Type</div>
                <div className="text-slate-300 mt-1">Untuk area dengan kebutuhan kebisingan rendah</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                <div className="font-semibold">Container Type</div>
                <div className="text-slate-300 mt-1">Untuk proyek besar, transport mudah, dan sistem paralel</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
