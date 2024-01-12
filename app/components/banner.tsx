export default function HomeBanner() {
  return (
    <div className="flex flex-col gap-2 h-[300px] rounded-lg p-6 bg-no-repeat  bg-center bg-cover bg-[url('/main.png')]">
      <h1 className="text-xl font-black text-white">kiyoon Jung</h1>
      <span className="text-white">
        Frontend Developer <br /> who likes football
      </span>
    </div>
  );
}
