import { useForm } from "react-hook-form";


const StudentDueComponent = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [date, setDate] = useState();
  // console.log(date);
  const handleForm = data => {
  }




  return (
    <div>
      <div className="bg-slate-200 drop-shadow-lg py-3 mt-5">
        <h1 className="text-center text-cyan-500 md:text-3xl text-lg font-bold italic font-serif">
          Student Due
        </h1>
      </div>

      <form onSubmit={handleSubmit(handleForm)} className="bg-white">
        <div className="pt-8 px-48">



          <div className="form-control mr-5">
            <label className="label">
              <span className="label-text font-serif font-semibold">Total Payable</span>
            </label>
            <input
              type="number"
              {...register("totalPayable", { required: "totalPayable Id is required" })}
              name="totalPayable"
              placeholder="Total Payable Amount"
              min={0}
              className="input input-bordered input-info w-80"
              required
            />
            {errors.totalPayable && (
              <p className="text-red-600">{errors.totalPayable?.message}</p>
            )}
          </div>
          <div className="form-control mr-5">
            <label className="label">
              <span className="label-text font-serif font-semibold">Total Paid</span>
            </label>
            <input
              type="number"
              {...register("totalPaid", { required: "totalPaid Id is required" })}
              name="totalPaid"
              placeholder="Total Paid Amount"
              className="input input-bordered input-info w-80"
              min={0}
              required
            />
            {errors.totalPaid && (
              <p className="text-red-600">{errors.totalPaid?.message}</p>
            )}
          </div>
          <div className="form-control mr-5">
            <label className="label">
              <span className="label-text font-serif font-semibold">Total Due</span>
            </label>
            <input
              type="number"
              {...register("totalDue", { required: "totalDue Id is required" })}
              name="totalDue"
              placeholder="Total Due Amount"
              min={0}
              className="input input-bordered input-info w-80"
              required
            />
            {errors.totalDue && (
              <p className="text-red-600">{errors.totalDue?.message}</p>
            )}
          </div>







        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            className="btn btn-info text-white  mt-8 px-8 mb-4"
          />
        </div>
      </form>
    </div>
  );
};

export default StudentDueComponent;