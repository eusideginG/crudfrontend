import { data } from "@/../services/data";
import { update } from "@/actions/update";
import FormCard from "@/components/detailedCard/formCard";
import FormData from "@/components/detailedCard/formData";

export default function Details(props) {
  const { formId } = props.params;
  const form = data.find((f) => f.Id === formId);

  return (
    <div className="flex justify-center items-center w-full">
      <form
        action={update}
        className="flex flex-col items-center bg-gray-200 rounded-xl p-4 w-[60%]"
      >
        <div className="flex justify-between items-start w-full border-b-2 mb-4 pb-2 border-gray-100">
          <FormCard Form={form} Data={data} Id={formId}/>
          <FormData Data={form.Data}/>
        </div>
        <button type="submit" className="px-4 py-1 border-2 border-gray-100 bg-gray-400 hover:bg-gray-300 active:bg-gray-200 rounded-full w-[20%]">Save</button>
      </form>
    </div>
  );
}
