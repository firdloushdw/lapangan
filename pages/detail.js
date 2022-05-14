export default function Detail() {
  return (
    <>
      <section className="wrapper">
        <div className="grid grid-rows-3 col-span-1 grid-flow-col gap-4">
          <div className="row-span-3 bg-black">
            <img className="h-full" src="/recom1.png" alt="" />
          </div>
          <div className="row-span-1 col-span-1 bg-black">
            <img src="/recom1.png" alt="" />
          </div>
          <div className="row-span-1 col-span-1 bg-black">
            <img src="/recom1.png" alt="" />
          </div>
          <div className="row-span-1 col-span-1 bg-black">
            <img src="/recom1.png" alt="" />
          </div>
        </div>
      </section>
      <section className="wrapper mt-8 mb-9">
        <div className="flex items-center justify-center flex-col gap-[14px]">
          <div className="font-bold">
            <h1 className="text-5xl text-[#555555]">
              <span className="text-[#91D36E]">Lokasi Lapangan</span>
            </h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.573119122223!2d107.61435811393997!3d-6.941510969879211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9d0aebbedc7%3A0x58af71c5b30e5963!2sCoworking%20Space%20Bisa%20AI!5e0!3m2!1sen!2sid!4v1648323221059!5m2!1sen!2sid"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
