export default function Pemesanan() {
  return (
    <>
      <section class="wrapper mt-12 mb-24">
        <h1 class="text-5xl font-bold font-Josefin text-center mb-12 text-[#91D36E]">
          Pemesanan
        </h1>
        <div class="flex grid-cols-3 gap-14">
          <div class="">
            <img src="barcode.png" alt="" />
          </div>
          <div class="flex flex-col my-auto">
            <div class="flex flex-col gap-[7px]">
              <div class="w-[152px] h-[29px] rounded-[10px] text-[#91D36E]">
                <p>Lapangan</p>
              </div>
              <div class="w-[329px] h-[29px] rounded-[10px] border-solid border-2 border-[#91d36e]">
                <p class="px-3 text-base text-[#C4C4C4]">Lapangan Garuda</p>
              </div>
              <div class="w-[152px] h-[29px] rounded-[10px] text-[#91D36E]">
                <p class="text-base">Kode Booking</p>
              </div>
              <div class="w-[329px] h-[29px] rounded-[10px] border-solid border-2 border-[#91d36e]">
                <p class="px-3 text-base text-[#C4C4C4]">78348ery4y884</p>
              </div>
              <div class=" mx-auto">
                <p class="mt-9 text-[#ED5322] text-[18px]">
                  Waktu Pembayaran 23:59:30
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-bold text-2xl py-4">Aturan Pembayaran</h2>
            <ol class="list-decimal text-[#555555] gap-3">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                obcaecati esse perferendis ex necessitatibus sapiente!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, illo eum. Optio, sequi. Inventore at non fugit
                earum ab esse?
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                quasi!
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
