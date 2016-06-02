# SnapMobile-FlashMessage

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapmobile-flashmessage": "git+ssh://@github.com/SnapMobileIO/SnapMobile-FlashMessage.git",

To configure, add the following to `app.js`:

    import 'snapmobile-flashmessage';
    
Finally, add 'FlashMessageModule' as a dependency for the angular app.

To use in your code, include `FlashMessage` as a dependency and then call:

```javavascript
this.FlashMessage.success('Successfully created');
```

or 

```javavascript
this.FlashMessage.errors('Successfully created');
```

Optionally, you can include a target div to attach the message to (default is `body`)…

```javavascript
this.FlashMessage.success('Successfully created', 'flash-message');
```

# Updating

Make any changes in `/src`.

Once changes are completed, run `gulp dist` to process JavaScript files and add to `/dist`.
