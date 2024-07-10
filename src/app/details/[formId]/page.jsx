"use server";
import { update } from "@/actions/update";
import FormCard from "@/components/detailedCard/formCard";
import FormData from "@/components/detailedCard/formData";
import { get } from "@/actions/get";
import { deleteFormData } from "@/actions/deleteData";

let disabled = true;
export default async function Details(props) {
  const { formId } = props.params;
  const forms = await get();
  const form = forms.find((f) => f.Id === formId);

  const handleFormAction = async (data) => {
    "use server";

    const response = await deleteFormData(formId, data);
    console.log(response);

    console.log(data);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        action={update}
        className="flex flex-col items-center bg-gray-200 rounded-xl p-4 w-[65%]"
      >
        <input type="hidden" name="id" value={formId} />
        <div className="flex justify-between items-start w-full border-b-2 mb-4 pb-2 border-gray-100 h-full">
          <FormCard Form={form} Data={forms} Id={formId} />
          <FormData
            Data={form?.FormData}
            Id={formId}
            Selected={(selected) => {
              "use server";
              handleFormAction(selected);
            }}
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            disabled={!disabled}
            className="px-4 py-1 border-2 border-gray-100 bg-gray-400 hover:bg-gray-300 active:bg-gray-200 disabled:bg-gray-100 rounded-full w-[20%]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
