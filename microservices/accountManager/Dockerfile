FROM debian:latest

# Update and install php requirements for 
RUN apt-get -y update && apt-get -y install apt-transport-https lsb-release ca-certificates wget
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg && echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list
RUN apt-get -y update && apt-get -y install apache2 php7.2 php7.2-xml php7.2-mysql php7.2-curl php7.2-mbstring

# Add Vhost
ADD ./microservices/accountManager/000-default.conf /etc/apache2/sites-available
RUN a2enmod rewrite && service apache2 restart

# Install Composer (hash_file must be updated to the latest)
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('SHA384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

EXPOSE 80
CMD apachectl -D FOREGROUND