<template>
  <div>
    <table>
      <colgroup>
        <col span="2" style="background:Khaki"><!-- С помощью этой конструкции задаем цвет фона для первых двух столбцов таблицы-->
        <col style="background-color:LightCyan"><!-- Задаем цвет фона для следующего (одного) столбца таблицы-->
      </colgroup>
      <tr><th>текст заголовка</th><th>текст заголовка</th><th>текст заголовка</th><th>текст заголовка</th></tr> <!--ряд с ячейками заголовков-->
      <tr><td>данные</td><td>данные</td><td>данные</td><td>данные</td></tr> <!--ряд с ячейками тела таблицы-->
    </table>

    <br><br>
    
    <table>
      <thead>
        <tr>
          <th>№ п/п</th>
          <th>Наименование товара</th>
          <th>Ед. изм.</th>
          <th>Количество</th>
          <th>Цена за ед. изм., руб.</th>
          <th>Стоимость, руб.</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="5" style="text-align:right">ИТОГО:</td><td>1168,80</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Томаты свежие</td><td>кг</td><td>15,20</td><td>69,00</td><td>1048,80</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Огурцы свежие</td><td>кг</td><td>2,50</td><td>48,00</td><td>120,00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
table
  /*убираем пустые промежутки между ячейками*/
  border-collapse: collapse
  /*устанавливаем для таблицы внешнюю границу серого цвета толщиной 1px*/
  border: 1px solid grey
  width: 100%

  /* границы ячеек первого ряда таблицы */
  th
    border: 1px solid grey

  /* границы ячеек тела таблицы */
  td
    border: 1px solid grey

</style>
