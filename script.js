/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const forecastBtn = document.querySelector (".forecast-btn");
const forecast = document.querySelector ("h3");
forecastBtn.addEventListener ('click', myForecast);
function myForecast () {
    return Math.random (0,5) = forecast;

}
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */
const forecastContainer = document.querySelector (".current-forecast h1");
forecastContainer.append(forecast);

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
const percent = document.querySelector ("p");

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
function randomPersent () {
    return Math.floor(Math.random() *100);
}
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
