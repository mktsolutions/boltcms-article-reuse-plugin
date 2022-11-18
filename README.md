# Acme ReferenceExtension

Author: Rosendo Rodriguez, rosendo.rosendo@dxc.com

This Bolt extension can be used to add ContentTypes entries in the article editor

Installation:

```bash
composer require luxnewcms/boltcms-article-plugin:dev-master
```

To update the package on the server after pushing new changes:

1. Run the following command.

```bash
sudo docker-compose exec php-fpm composer update luxnewcms/boltcms-article-plugin:dev-master
```