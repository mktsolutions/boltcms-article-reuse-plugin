# Acme ReferenceExtension

Author: YourNameHere

This Bolt extension can be used to add ContentTypes entries in the article editor

Installation:

```bash
composer require luxnewcms/boltcms-article-plugin:dev-master
```

Up update the package on the server after pushing new changes:

1. Go to https://packagist.org/packages/luxnewcms/boltcms-article-plugin and click on the "update" button.

2. Run the following command.

```bash
sudo docker-compose exec php-fpm composer update luxnewcms/boltcms-article-plugin:dev-master
```