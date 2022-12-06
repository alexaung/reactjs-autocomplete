import { SearchForm } from "../../components/SearchForm";
import station from "./../../assets/station1.jpg";

export const HomePage = () => {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('../src/assets/station.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-base-200 py-1 px-20">
        <div className="container mx-auto md:w-3/5 lg:w-3/4">
          <div className="relative mb-6 -mt-56 break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className=" flex-wrap justify-center">
                <h1 className="text-2xl font-bold pt-5">
                  Where do you want to go?
                </h1>
                <div className="mt-10 py-10 justify-center px-4 lg:order-3 lg:mt-0 lg:self-center">
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-200">
        <div className="hero py-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={station} className="max-w-lg rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Autumn Special</h1>
              <p className="py-6">
                For a short time only: <strong>get a 10% discount</strong> on{" "}
                <strong>selected German Rail passes</strong>
              </p>
              <button className="btn btn-primary text-black hover:text-white">
                More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
