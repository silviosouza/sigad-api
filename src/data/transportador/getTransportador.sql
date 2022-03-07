SELECT tra_codigo,
tra_tipo_transporte,
tra_descricao
FROM tbl_transportador tra
WHERE   1=1 AND tra_codigo = @transportadorId;