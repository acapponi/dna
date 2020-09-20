# Quick-start Kit - Sass Edition

La idea principal de esta versión es dejar de lado las clases y manejarse de manera más tradicional usando nombres de clases específicos.

Para esto se borraron todas las clases de font-size, margin y padding, así como también line-height y letter-spacing. Sí mantuve clases helper que no estuvieran en bootstrap.

## Sobre los breakpoints

Se agregó [Sass MQ](https://github.com/sass-mq/sass-mq) para poder utilizar más fácilmente media querys, usando los mismos breakpoints que ya conocemos:

```
tablet: $width-sm,
tabletLandscape: $width-md,
desktopMini: $width-lg,
desktop: $width-xl,
desktopExtraLarge: $width-xxl
```

o su versión short

```
sm: $width-sm,
md: $width-md,
lg: $width-lg,
xl: $width-xl,
xxl: $width-xxl
```

siendo...

```
$width-sm: 768px;
$width-md: 992px;
$width-lg: 1260px;
$width-xl: 1300px;
$width-xxl: 1820px;
```

No incluí un breakpoint para mobile porque la idea es hacer mobile first.
Si se necesita algo totalmente especifico para mobile se puede usar
```
@include mq($until: tablet) {...}
```

Como siempre, estos breakpoints están basados en la lógica de grilla de [Timple BS](https://github.com/acapponi/timple-bs)

<table>
  <thead>
    <tr>
      <th></th>
      <th class="text-center">
        Extra small<br>
        <small>&lt;768px</small>
      </th>
      <th class="text-center">
        Small<br>
        <small>≥768px</small>
      </th>
      <th class="text-center">
        Medium<br>
        <small>≥992px</small>
      </th>
      <th class="text-center">
        Large<br>
        <small>≥1260px</small>
      </th>
      <th class="text-center">
        Extra large<br>
        <small>≥1300px</small>
      </th>
      <th class="text-center">
        Requete large<br>
        <small>≥1820px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code></code></td>
      <td><code>-sm-</code></td>
      <td><code>-md-</code></td>
      <td><code>-lg-</code></td>
      <td><code>-xl-</code></td>
      <td><code>-xxl-</code></td>
    </tr>
  </tbody>
</table>

## Sobre Hamburger.css

Se incluye también [Hamburger.css](https://jonsuh.com/hamburgers/).
Para usar en el navbar de Bootstrap, reemplazar el elemento `navbar-toggler` por:

```html
<button class="navbar-toggler hamburger hamburger--collapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	<div class="hamburger-box">
		<div class="hamburger-inner"></div>
	</div>
</button>
```

## Sobre sass

En principio la idea no es usar nada muy loco, solamente tener una forma de organizar mejor los archivos y cascadas, siendo que la intención es usar clases específicas me parece piola poder aplica mayormente la lógica de cascadas de Sass, que permite tener las cosas anidadas de manera más intuitiva.

La documentación completa de Sass se puede consultar [acá](https://sass-lang.com/documentation/).

## Cómo editar archivos de sass en Atom

Ver [este archivo](https://docs.google.com/document/d/1m9uPYXRIRIhiQjwn42EBjz4TttcrulpVjYG0-X0cLRc/edit?usp=sharing) para más información.


#### Créditos

Incluye [Bootstrap](https://getbootstrap.com), [Slick](http://kenwheeler.github.io/slick/), [Hamburger.css](https://jonsuh.com/hamburgers/) y [Sass MQ](https://github.com/sass-mq/sass-mq).
