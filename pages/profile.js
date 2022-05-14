export default function Profile() {
  return (
    <>
      <section className="flex gap-[119px] items-start justify-center mt-[136px] wrapper">
        <div className="flex flex-col items-center">
          <div className="w-[206px] h-[206px] bg-[#717171] rounded-full mb-[46px]">
            <img src="className/ellipse.svg" alt="" className="w-full h-full" />
          </div>
          <a
            href="#"
            className="text-base text-[#FFFFFF] w-[224px] h-[32px] rounded-[10px] px-10 py-2 bg-[#91D36E] text-center"
          >
            Ganti Foto
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-[7px]">
            <div className="w-[152px] h-[29px] rounded-[10px]">Username</div>
            <div className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px]"></div>
            <div className="w-[152px] h-[29px] rounded-[10px]">Komunitas</div>
            <div className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px]"></div>
            <div className="w-[152px] h-[29px] rounded-[10px]">
              Nomor Telepon
            </div>
            <div className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px]"></div>
            <div className="w-[152px] h-[29px] rounded-[10px]">E-mail</div>
            <div className="w-[329px] h-[29px] bg-[#C4C4C4] rounded-[10px]"></div>
          </div>
          <div className="flex gap-[14px] ml-auto">
            <div className="w-[113px] h-[29px] rounded-[10px] bg-[#C4C4C4] mt-[49px]"></div>
            <div className="w-[113px] h-[29px] rounded-[10px] bg-[#C4C4C4] mt-[49px]"></div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center mt-[155px] flex-col mb-[135px]">
        <div className="font-bold">
          <h1 className="text-5xl text-[#555555]">
            Ganti
            <span className="text-[#91D36E]">Kata Sandi</span>
          </h1>
        </div>
        <div className="mt-[37px]">
          <div className="w-[152px] h-[29px] rounded-[10px]">Sandi Lama</div>
          <div className="w-[327px] h-[29px] rounded-[10px] bg-[#C4C4C4] mb-[9px]"></div>
          <div className="w-[152px] h-[29px] rounded-[10px]">Sandi Baru</div>
          <div className="w-[327px] h-[29px] rounded-[10px] bg-[#C4C4C4] mb-[22px]"></div>
          <div className="w-[327px] h-[15px] rounded-[10px] bg-[#C4C4C4] mb-[22px]"></div>
        </div>
        <div className="flex gap-[14px]">
          <div className="w-[133px] h-[29px] bg-[#C4C4C4] rounded-[10px]">
            Ubah Nomor
          </div>
          <div className="w-[133px] h-[29px] bg-[#C4C4C4] rounded-[10px]">
            Kirim
          </div>
        </div>
      </section>
    </>
  );
}
