import Picker from "rc-picker";
import { PickerPanel } from "rc-picker";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import zhCN from "rc-picker/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import "rc-picker/assets/index.css";
import "./date-picker.css";

const defaultValue = dayjs();

export default function DatePicker() {
  return (
    <div>
      <div style={{ margin: "0 8px" }}>
        <Picker
          className="w-[200px]"
          prevIcon={<ArrowLeft />}
          nextIcon={<ArrowRight />}
          superPrevIcon={<ChevronLeft />}
          superNextIcon={<ChevronRight />}
          generateConfig={dayjsGenerateConfig}
          locale={zhCN}
          showTime={true}
          defaultValue={defaultValue}
          allowClear={{
            clearIcon: <X size={16} />,
          }}
        />
        <PickerPanel
          generateConfig={dayjsGenerateConfig}
          locale={zhCN}
          defaultValue={defaultValue}
          showTime={true}
          prevIcon={<ArrowLeft />}
          nextIcon={<ArrowRight />}
          superPrevIcon={<ChevronLeft />}
          superNextIcon={<ChevronRight />}
        />
      </div>
    </div>
  );
}
