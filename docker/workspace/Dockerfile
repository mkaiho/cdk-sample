FROM node:gallium-bullseye

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
  unzip awscliv2.zip && \
  rm awscliv2.zip && \
  ./aws/install && \
  rm -r ./aws

WORKDIR /work/cdk-sample
