import { CheckCircle } from "lucide-react";

const LibraryPlanCard = ({ plan, isSelected, onClick }) => {
  console.log(isSelected);
  return (
    <div
      onClick={onClick}
      className={`mx-auto mt-16 grid max-w-lg cursor-pointer items-center gap-y-6 
        sm:mt-20 sm:gap-y-0 lg:max-w-4xl 
        ${isSelected ? "border-2 border-primary rounded-3xl" : "border-none"}
      `}
    >
      <div className="relative rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8  sm:p-10 lg:mx-0  lg:rounded-bl-3xl">
        {isSelected && (
          <CheckCircle className="absolute top-4 right-4 h-6 w-6 text-primary" />
        )}
        <h3 id="tier-hobby" className="text-base font-semibold text-primary">
          {plan.plan_name}
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight text-gray-900">
            ${plan.plan_amount}
          </span>
          <span className="text-base text-gray-500">
            /{plan.planDetails.plan_frequency}
          </span>
        </p>
        <p className="mt-6 text-base text-gray-600">
          The perfect plan if you're just getting started with our product.
        </p>
        <ul
          role="list"
          className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10"
        >
          {[
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
          ].map((feature, index) => (
            <li key={index} className="flex gap-x-3">
              {feature}
            </li>
          ))}
        </ul>
        {/* <a
          href="#"
          aria-describedby="tier-hobby"
          className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-indigo-600 sm:mt-10"
        >
          Get started today
        </a> */}
      </div>
    </div>
  );
};

export default LibraryPlanCard;
