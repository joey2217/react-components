# DatePicker

## 日期选择器

[Demo](/date-picker)

## 实现

```tsx
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
// const defaultValue = moment('2019-09-03 05:02:03');

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
          allowClear={{
            clearIcon: <X size={16} />,
          }}
        />
        <PickerPanel
          generateConfig={dayjsGenerateConfig}
          locale={zhCN}
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
```

```css
:root {
  --border: oklch(0.922 0 0);
}

.rc-picker-panel {
  background-color: white;
}
.rc-picker-date-panel .rc-picker-cell-inner {
  height: 30px;
  width: 30px;
  line-height: 30px;
}

.rc-picker-footer,
.rc-picker-picker-footer {
  background: white;
}

.rc-picker-input {
  border-color: var(--border);
  font-size: 14px;
}
.rc-picker-input > input {
  padding: 0 8px;
}
.rc-picker-dropdown {
  @apply shadow-lg;
}
.rc-picker-datetime-panel .rc-picker-time-panel {
  border-color: var(--border);
}
.rc-picker-panel {
  border-color: var(--border);
}
.rc-picker-time-panel-column::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.rc-picker-time-panel-column::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.rc-picker-time-panel-column::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.rc-picker-time-panel-column::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.rc-picker {
  border: 1px solid blue;
}
.rc-picker-dropdown {
  font-size: 14px;
}
.rc-picker-ranges > li,
.rc-picker-ranges > li button {
  cursor: pointer;
}
.rc-picker-ranges {
  padding: 8px 16px;
}
.rc-picker-clear {
  top: 2px;
}
```
