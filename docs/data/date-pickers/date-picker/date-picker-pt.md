---
title: Componente React Seletor de data
components: DateCalendar, DatePicker, DayCalendarSkeleton, DesktopDatePicker, MobileDatePicker, MonthCalendar, PickersDay, StaticDatePicker, YearCalendar
githubLabel: 'component: DatePicker'
packageName: '@mui/x-date-pickers'
materialDesign: https://m2.material.io/components/date-pickers
---

# Seletor de data

<p class="description">Seletores de data permitem que o usuário selecione uma data.</p>

Date pickers let the user select a date. Seletores de data permitem que o usuário selecione uma data.

- Diálogos em dispositivos móveis
- Menu suspenso com campo de texto em desktop

## Utilização Básica

The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on desktop.

{{"demo": "BasicDatePicker.js"}}

## Modo estático

It's possible to render any date picker without the modal/popover and text field. Isso pode ser útil na construção de containers customizados de popover/modal.

{{"demo": "StaticDatePickerDemo.js", "bg": true}}

## Responsividade

O componente seletor de data é projetado e otimizado para o dispositivo em que ele é executado.

- The `MobileDatePicker` component works best for touch devices and small screens.
- The `DesktopDatePicker` component works best for mouse devices and large screens.

By default, the `DatePicker` component renders the desktop version if the media query [`@media (pointer: fine)`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) matches. Isto pode ser customizado com a propriedade `desktopModeMediaQuery`.

{{"demo": "ResponsiveDatePickers.js"}}

## Propriedades de formulário

The date picker component can be disabled or read-only.

{{"demo": "FormPropsDatePickers.js"}}

## Localização

Use `LocalizationProvider` para alterar a date-library de localização que é usada para renderizar o seletor de data. Aqui esta um exemplo de alteração da localidade com o adaptador `date-fns`:

{{"demo": "LocalizedDatePicker.js"}}

## Jalali calendar system

Install `date-fns-jalali` and use `@date-io/date-fns-jalali` adapter to support [Jalali calendar](https://en.wikipedia.org/wiki/Jalali_calendar).

{{"demo": "JalaliDatePicker.js"}}

## Exemplos de exibições

É possível combinar `year`, `month`, e `date` para seleção na exibição. As exibições aparecerão na ordem em que estão incluídas no array `views`.

{{"demo": "ViewsDatePicker.js"}}

## Orientação paisagem

For ease of use, the date picker will automatically change the layout between portrait and landscape by subscription to the `window.orientation` change. Você pode forçar um leiaute específico usando a propriedade `orientation`.

{{"demo": "StaticDatePickerLandscape.js", "bg": true}}

## Subcomponentes

Some lower-level sub-components (`DateCalendar`, `MonthCalendar`, and `YearCalendar`) are also exported. Estes são renderizados sem estar encapsulado ou lógica exterior (campo com mascara, valores de data e validação, etc.).

{{"demo": "SubComponentsCalendars.js"}}

## Componente de entrada customizado

You can customize the rendering of the input with the `renderInput` prop. Certifique-se de encaminhar `ref` e `inputProps` corretamente para o componente de entrada customizado.

{{"demo": "CustomInput.js"}}

## Renderização customizada do dia

The displayed days are customizable with the `Day` component slot.
You can take advantage of the [PickersDay](/x/api/date-pickers/pickers-day/) component.

{{"demo": "CustomDay.js"}}

## Dados dinâmicos

Às vezes, pode ser necessário exibir informação adicional diretamente no calendário. Aqui está um exemplo de pré-busca e exibição de dados do servidor usando as propriedades `onMonthChange`, `loading`, e `components.Day`.

{{"demo": "ServerRequestDatePicker.js"}}

## Helper text

Você pode mostrar um texto de ajuda com o formato de data aceito.

{{"demo": "HelperText.js"}}
