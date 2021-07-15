# Angular Directive (glow)

An example of how to create an attribute directive with Anglar. The directive in
this example (GlowDirective) is used to apply a CSS box-shadow to an element.

See [Demo on StackBlitz](https://stackblitz.com/github/turner1979/angular-glow-directive)

The glow effect can be applied to elements in 2 ways, using the default colour (which is defined in the directive):

```
<div glow>...</div>
```

or by providing a colour binding:

```
<div [glow]="colour">...</div>
```

## Running Locally

Clone the repo then run:

```
ng serve
```

