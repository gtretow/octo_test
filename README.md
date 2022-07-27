## Objetivos

# Esse sistema deverá permitir o cadastro de câmeras, contendo um nome da câmera para um humano identificá-la (ex: "Jardim", "Hall de Entrada"), fabricante e número de série.

O Campo nome é livre, com limite de 50 caracteres;

# O sistema deverá permitir:

    Listar câmeras inseridas;
    Remover câmera;
    Adicionar nova câmera;

# O campo fabricante deverá ser selecionado de uma lista, sendo os possíveis fabricantes de câmera:

    Secure Câmeras Inc;
    Surveillance Cams LLC;
    DigiEye Group;
    CâmeraFi Inc;
    VidMasters Inc;

# Requisitos Não Funcionais

    A interface gráfica deverá funcionar pelo menos nos navegadores modernos recentes Chrome e Firefox.

    Não é preciso suportar versões antigas dos navegadores.

    A comunicação entre a interface (frontend) e o resto do sistema (backend) deverá ser feita através de uma API JSON.

    Os dados do sistema deverão persistir "restarts" (isto é, deverão salvar os dados em algum banco de dados ou arquivo no computador).

    A interface gráfica deve ser feita em React + Typescript.
    
    Uso do framework Phoenix (em Elixir) é um diferencial.
