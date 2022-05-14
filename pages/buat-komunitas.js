export default function BuatKomunitas() {
  return (
    <>
      <section className="mt-[64px]">
        <div className="flex items-center justify-center">
          <img src="bapak-bola.png" alt="" />
        </div>

        <div className="flex items-center justify-center mt-[64px] flex-col">
          <h1 className="text-[48px] font-bold text-[#555555] mb-[61px]">
            Buat <span className="text-[#91D36E]">Komunitas</span>
          </h1>

          <form className="flex items-center gap-[119px] mb-[98px]">
            <div>
              <div className="shrink-0">
                <img
                  className="h-[206px] w-[206px]"
                  src="ellipse.svg"
                  alt="Current profile photo"
                />
              </div>
              <label className="flex flex-col items-center pl-[61px] pr-[66px] py-[7px] rounded-[10px] border border-[#91D36E] cursor-pointer mt-[46px]">
                <span className="text-[16px] text-[#91D36E]">Upload Logo</span>
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col gap-[12px]">
              <label for="nama-komunitas" className="text-[#91D36E]">
                Nama Komunitas
              </label>
              <input
                type="text"
                className="border border-[#91D36E] rounded-[10px] focus:outline-none pl-[18px] py-[7px] block w-[329px]"
                placeholder="ABCDEFutsal"
              />
              <label for="jenis-olahraga" className="text-[#91D36E]">
                Jenis Olahraga
              </label>
              <input
                type="text"
                className="border border-[#91D36E] rounded-[10px] focus:outline-none pl-[18px] py-[7px] block w-[329px]"
                placeholder="Futsal"
              />

              <label for="asal-komunitas" className="text-[#91D36E]">
                Asal Komunitas
              </label>
              <input
                type="text"
                className="border border-[#91D36E] rounded-[10px] focus:outline-none pl-[18px] py-[7px] block w-[329px]"
                placeholder="0895xxxxxx"
              />

              <label for="nama-komunitas" className="text-[#91D36E]">
                Deskripsi Komunitas
              </label>
              <textarea
                name="deskripsi-komunitas"
                id=""
                cols="30"
                rows="10"
                className="border border-[#91D36E] rounded-[10px] focus:outline-none pl-[18px] py-[7px] block w-[329px] h-[152px]"
                placeholder="Visi misi komunitasmu..."
              ></textarea>
              <button className="bg-[#91D36E] rounded-[10px] py-[7px] text-white">
                Buat
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
