"use client";
import data from "@/data/accordian";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Accordian = () => {
    const router=useRouter();
  const [selected, setSelected] = useState<null | string>(null);
  const [enableMulti, setEnableMulti] = useState<true | false>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  useEffect(() => {
    if (enableMulti===true) {
        setSelected(null)
        return;
    }
    else if (enableMulti===false) {
        setMultiple([])
        
    }
    


   
  }, [enableMulti])
  

  const handleSingleClick = (id: string) => {
    if (multiple.length>0) {
        setMultiple([])
        router.refresh();
    }
    
    console.log(id);
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id: any) => {
    setSelected(null)
    let copyMultiple: string[] = [...multiple];
    const findindexofid = copyMultiple.indexOf(id);
    console.log(findindexofid);
    if (findindexofid == -1) {
      copyMultiple.push(id);
    } else copyMultiple.splice(findindexofid, 1);
    console.log(copyMultiple);
    setMultiple(copyMultiple);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  ">
        <button
          onClick={() => {
            setEnableMulti((prev) => !prev);
          }}
          className={`${
            enableMulti ? "bg-green-500" : "bg-rose-500"
          } font-bold rounded-2xl  border hover:brightness-105 p-1 mx-20 mt-8 transition-all duration-500`}
        >
          Multiple Selection {enableMulti ? "Activated" : "Not activated"}
        </button>
        {data && data.length > 0
          ? data.map((item) => (
              <div
                onClick={() => {
                  enableMulti
                    ? handleMultiSelection(item.id)
                    : handleSingleClick(item.id);
                }}
                className="cursor-pointer flex flex-col gap-3 border rounded-xl p-4 m-7 max-w-[550px] "
                key={item.id}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>{item.question}</div>
                  <div className="text-2xl select-none">+</div>
                </div>
                <div className="text-slate-600">
                  {selected === item.id||multiple.indexOf(item.id)!==-1 ? item.answer : ""}
                </div>
              </div>
            ))
          : "Data not found fren"}
      </div>
    </div>
  );
};

export default Accordian;
