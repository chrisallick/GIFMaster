<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0">

        <title><?php echo $site->title()->html() ?></title>
        <meta name="description" content="<?php echo $site->description()->html() ?>">
        <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

        <?php echo css('assets/css/reset.css') ?>
        <?php echo css('assets/css/main.css') ?>

        <?php echo js('assets/js/jquery-2.1.1.min.js') ?>
        <?php echo js('assets/js/main.js') ?>
    </head>
    <body>
        <div id="wrapper">
            <div id="gifs">
                <?php foreach($page->gifs()->yaml() as $gif): ?>
                    <div class="gif" data-src="<?= $page->image($gif['image'])->url() ?>"></div>
                <?php endforeach ?>
            </div>
        </div>
    </body>
</html>