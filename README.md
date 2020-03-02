# Quick-start Kit - Sass Edition

La idea principal de esta versión es dejar de lado las clases y manejarse de manera más tradicional usando nombres de clases específicos (a lo possible).

Para esto se borraron todas las clases de font-size, margin y padding, así como también line-height y letter-spacing. Sí mantuve clases helper que no estuvieran en bootstrap.

Se agregó [Sass MQ](https://github.com/sass-mq/sass-mq) para poder utilizar más fácilmente media querys, usando los mismos breakpoints que ya conocemos:

´´
tablet: $width-sm,
tabletLandscape: $width-md,
desktopMini: $width-lg,
desktop: $width-xl,
desktopExtraLarge: $width-xxl
´´

o su versión short

´´
sm: $width-sm,
md: $width-md,
lg: $width-lg,
xl: $width-xl,
xxl: $width-xxl
´´

siendo...

´´
$width-sm: 768px;
$width-md: 992px;
$width-lg: 1260px;
$width-xl: 1300px;
$width-xxl: 1820px;
´´

No incluí un breakpoint para mobile porque la idea es hacer mobile first.
Si se necesita algo totalmente especifico, solo en mobile, se puede usar
´´
@include mq($until: tablet) {...}
´´
